"use client";

import { useCreateNote } from "@/api/notes";
import { generateRandomNote } from "@/util/notes";
import { useState } from "react";

export const NoteForm = () => {
  const createNote = useCreateNote();
  const [isLoading, setIsLoading] = useState(false);

  const createRandomNote = async () => {
    setIsLoading(true);
    const randomNote = generateRandomNote();
    await createNote(randomNote).then(() => {
      setIsLoading(false);
    });
  };
  return (
    <>
      <button onClick={() => createRandomNote()}>
        {isLoading ? "Loading..." : "create Random"}
      </button>
    </>
  );
};
