"use client";

import { Note as NoteProps } from "common/schemas";
import { useNotesStore } from "../../stores/notesStore";
import { useEffect } from "react";
import { Note } from "./note";

export const Notes = ({ notes }: { notes?: NoteProps[] }) => {
  const notesStore = useNotesStore((state) => state.notes);
  const add = useNotesStore((state) => state.add);

  useEffect(() => {
    if (notes) {
      notes.forEach((note) => add(note));
    }
  }, [notes, add]);

  return (
    <>
      {notesStore.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </>
  );
};
