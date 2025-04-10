import { zValidator } from "@hono/zod-validator";
import { notesSchema } from "common/schemas";
import { eq } from "drizzle-orm";
import { Hono } from "hono";
import { db } from "../index.js";
import { notesTable } from "../schemas/notes.js";

const notes = new Hono();

notes.get("/", async (context) => {
  const notes = await db.select().from(notesTable);
  console.log("log: get all");
  console.log(notes);
  return context.json(notes);
});

notes.post("/", zValidator("form", notesSchema), async (context) => {
  console.log("log: post");
  const validated = context.req.valid("form");
  const result = await db.insert(notesTable).values(validated).execute();
  return context.json(result, 201);
});

notes.get("/:id", async (context) => {
  console.log("log: get id");
  const id = context.req.param("id");
  const result = await db
    .select()
    .from(notesTable)
    .where(eq(notesTable.id, parseInt(id)))
    .execute();

  console.log(result);
  return context.json(result);
});

notes.delete("/:id", async (context) => {
  const id = context.req.param("id");
  const result = await db
    .delete(notesTable)
    .where(eq(notesTable.id, parseInt(id)))
    .execute();
  console.log(`log: delete ${parseInt(id)}`);
  return context.json(result);
});

export default notes;
