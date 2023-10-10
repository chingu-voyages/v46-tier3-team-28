import { relations } from 'drizzle-orm';
import { boolean, int, mysqlTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/mysql-core';
import type { AdapterAccount } from '@auth/core/adapters';

export const users = mysqlTable('user', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }),
  username: varchar('username', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull(),
  emailVerified: timestamp('emailVerified', {
    mode: 'date',
    fsp: 3,
  }).defaultNow(),
  image: varchar('image', { length: 255 }),
});

export const accounts = mysqlTable(
  'account',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    type: varchar('type', { length: 255 }).$type<AdapterAccount['type']>().notNull(),
    provider: varchar('provider', { length: 255 }).notNull(),
    providerAccountId: varchar('providerAccountId', { length: 255 }).notNull(),
    refresh_token: varchar('refresh_token', { length: 255 }),
    access_token: varchar('access_token', { length: 255 }),
    expires_at: int('expires_at'),
    token_type: varchar('token_type', { length: 255 }),
    scope: varchar('scope', { length: 255 }),
    id_token: varchar('id_token', { length: 255 }),
    session_state: varchar('session_state', { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, {
    fields: [accounts.userId],
    references: [users.id],
  }),
}));

export const sessions = mysqlTable('session', {
  sessionToken: varchar('sessionToken', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id],
  }),
}));

export const verificationTokens = mysqlTable(
  'verificationToken',
  {
    identifier: varchar('identifier', { length: 255 }).notNull(),
    token: varchar('token', { length: 255 }).notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);

export const userRelations = relations(users, ({ many }) => ({
  collections: many(collections),
}));

export const collections = mysqlTable('collection', {
  id: serial('id').primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow(),
  title: varchar('title', { length: 255 }).notNull(),
  private: boolean('private').default(true),
});

export const collectionsRelations = relations(collections, ({ one, many }) => ({
  author: one(users, {
    fields: [collections.userId],
    references: [users.id],
  }),
  items: many(items),
}));

export const items = mysqlTable('item', {
  id: serial('id').primaryKey(),
  collectionId: varchar('collection_id', { length: 255 }),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  url: varchar('url', { length: 255 }),
  image: varchar('image', { length: 255 }),
  note: text('note'),
});

export const itemRelations = relations(items, ({ one, many }) => ({
  itemCategories: many(itemCategories),
  collection: one(collections, {
    fields: [items.collectionId],
    references: [collections.id],
  }),
}));

export const categories = mysqlTable('category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).unique(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  itemCategories: many(itemCategories),
}));

export const itemCategories = mysqlTable(
  'item_category',
  {
    itemId: int('item_id').notNull(),
    categoryId: int('category_id').notNull(),
  },
  (table) => ({
    compoundKey: primaryKey(table.itemId, table.categoryId),
  }),
);

export const itemCategoriesRelations = relations(itemCategories, ({ one }) => ({
  item: one(items, {
    fields: [itemCategories.itemId],
    references: [items.id],
  }),
  category: one(categories, {
    fields: [itemCategories.categoryId],
    references: [categories.id],
  }),
}));
