import { connect } from '@planetscale/database';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/planetscale-serverless';
import * as schema from './schema';

// create the connection
const connection = connect({
  // host: process.env.DATABASE_HOST,
  // username: process.env.DATABASE_USERNAME,
  // password: process.env.DATABASE_PASSWORD,
  url: process.env.DATABASE_URL,
});

export const db = drizzle(connection, { schema });
