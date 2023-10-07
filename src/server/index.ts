import 'dotenv/config'
import { drizzle } from 'drizzle-orm/planetscale-serverless'
import { migrate } from 'drizzle-orm/planetscale-serverless/migrator'
import { connect } from '@planetscale/database'

// create the connection
const connection = connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD
})

const db = drizzle(connection)

if (process.env.NODE_ENV === "development") {
  migrate(db, {migrationsFolder: "drizzle"})
}