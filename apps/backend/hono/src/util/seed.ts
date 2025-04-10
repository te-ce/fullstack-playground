import { faker } from "@faker-js/faker";
import { createClient } from "@libsql/client";
import { getRandomNumber } from "common/helpers";
import { drizzle } from "drizzle-orm/libsql";
import { notesTable } from "../schemas/notes.js";

const client = createClient({ url: "file:local.db" });
const db = drizzle({ client });
const seedDB = async () => {
  const count = 20;

  for (let index = 0; index < count; index++) {
    await db.insert(notesTable).values({
      author: faker.person.fullName(),
      title: faker.food.vegetable(),
      description: faker.lorem.sentence(getRandomNumber(4, 30)),
    });
  }
};

seedDB().then(() => {
  console.log("Database seeded!");
});
