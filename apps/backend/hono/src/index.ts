import { serve } from "@hono/node-server";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { Hono } from "hono";
import notes from "./routes/notes.js";
import "dotenv/config";

const client = createClient({ url: "file:local.db" });
export const db = drizzle({ client });
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/notes", notes);

serve(
  {
    fetch: app.fetch,
    port: 3001,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
