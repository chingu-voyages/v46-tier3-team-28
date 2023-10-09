import 'dotenv/config';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator';
import { connect } from '@planetscale/database';

// create the connection
const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export const db = drizzle(connection);

export const migratation = async () => {
  migrate(db, { migrationsFolder: 'drizzle' });
};

