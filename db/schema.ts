import {
  mysqlTable,
  serial,
  varchar,
  text,
  timestamp,
} from "drizzle-orm/mysql-core";

// زائر يطلب الكتيّب أو يتواصل
export const leads = mysqlTable("leads", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  interest: varchar("interest", { length: 64 }).notNull().default("booklet"),
  message: text("message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
