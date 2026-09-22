import { createInsertSchema } from "drizzle-zod";
import { integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { z } from "zod/v4";
import { usersTable } from "./auth";

export const projectsTable = pgTable("portfolio_projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  skill: varchar("skill", { length: 32 }).notNull(),
  description: text("description").notNull(),
  year: varchar("year", { length: 16 }).notNull(),
  assetPath: text("asset_path"),
  assetType: varchar("asset_type", { length: 128 }),
  assetName: text("asset_name"),
  ownerId: varchar("owner_id")
    .notNull()
    .references(() => usersTable.id),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projectsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projectsTable.$inferSelect;