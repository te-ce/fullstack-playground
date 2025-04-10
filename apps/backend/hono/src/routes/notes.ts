import { zValidator } from "@hono/zod-validator";
import { notesSchema } from "common/schemas";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { db } from "../index.js";
import { notesTable } from "../schemas/notes.js";

const notes = new Hono();

notes.get("/", async (context) => {
  return context.json(await db.select().from(notesTable));
});

notes.post("/", zValidator("form", notesSchema), async (context) => {
  const validated = context.req.valid("form");
  const result = await db.insert(notesTable).values(validated).execute();
  return context.json(result, 201);
});

notes.get("/:id", async (context) => {
  const id = context.req.param("id");
  const result = await db
    .select()
    .from(notesTable)
    .where(eq(notesTable.id, parseInt(id)))
    .execute();
  return context.json(result);
});

notes.delete("/:id", async (context) => {
  const id = context.req.param("id");
  const result = await db
    .delete(notesTable)
    .where(eq(notesTable.id, parseInt(id)))
    .execute();
  return context.json(result);
});

export default notes;
