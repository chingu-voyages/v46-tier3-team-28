import { relations } from 'drizzle-orm';
import { boolean, int, mysqlTable, serial, text, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('user', {
  id: text('id').notNull().primaryKey(),
  fullName: text('fullName'),
  username: text('username'),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const userRelations = relations(users, ({ many }) => ({
  collections: many(collections),
}));

export const collections = mysqlTable('collection', {
  id: serial('id').primaryKey(),
  userId: text('userId').notNull(),
  createdAt: timestamp('createdAt', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updatedAt', { mode: 'date' }).defaultNow().notNull(),
  title: text('title').notNull(),
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
  collectionId: text('collection_id'),
  title: text('title').notNull(),
  description: text('description'),
  url: text('url'),
  image: text('image'),
  note: text('note'),
});

export const itemRelations = relations(items, ({ one, many }) => ({
  itemCategories: many(itemCategories),
  collection: one(collections),
}));

export const categories = mysqlTable('category', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 50 }).unique(),
});

export const categoriesRelations = relations(categories, ({ many }) => ({
  itemCategories: many(itemCategories),
}));

export const itemCategories = mysqlTable('item_category', {
  itemId: int('item_id').notNull(),
  categoryId: int('category_id').notNull(),
});

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
