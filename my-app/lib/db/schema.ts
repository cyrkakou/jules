// my-app/lib/db/schema.ts
import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  hashedPassword: text('hashedPassword'), // Will be used later for credentials auth
});
