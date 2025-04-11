import { getRandomNumber, Note } from "common";
import { faker } from "@faker-js/faker";

export const generateRandomNote = () => {
  return {
    author: faker.person.fullName(),
    title: faker.food.vegetable(),
    description: faker.lorem.sentence(getRandomNumber(4, 30)),
  } as Note;
};
