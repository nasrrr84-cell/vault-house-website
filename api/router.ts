import { z } from "zod";
import { sql } from "drizzle-orm";
import { createRouter, publicQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { leads } from "@db/schema";

let tableReady = false;
async function ensureLeadsTable() {
  if (tableReady) return;
  const db = getDb();
  await db.execute(sql`
    CREATE TABLE IF NOT EXISTS leads (
      id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(320) NOT NULL,
      interest VARCHAR(64) NOT NULL DEFAULT 'booklet',
      message TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);
  tableReady = true;
}

export const appRouter = createRouter({
  ping: publicQuery.query(() => ({ ok: true, ts: Date.now() })),

  leads: createRouter({
    submit: publicQuery
      .input(
        z.object({
          name: z.string().min(2).max(255),
          email: z.string().email().max(320),
          interest: z.string().min(1).max(64).default("booklet"),
          message: z.string().max(2000).optional(),
        })
      )
      .mutation(async ({ input }) => {
        await ensureLeadsTable();
        const db = getDb();
        await db.insert(leads).values({
          name: input.name,
          email: input.email,
          interest: input.interest,
          message: input.message ?? null,
        });
        return { ok: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
