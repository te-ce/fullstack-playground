import { useNotesStore } from "@/stores/notesStore";
import { BASE_DB_URI } from "@/util/variables";
import { Note } from "common";
import { useCallback } from "react";

export const useCreateNote = () => {
  const createNote = useNotesStore((state) => state.create);
  return useCallback(
    (note: Note) => {
      return fetch(`${BASE_DB_URI}/notes/`, {
        method: "POST",
        body: JSON.stringify({ note }),
      }).then(() => {
        createNote(note);
      });
    },
    [createNote],
  );
};

export const useDeleteNote = () => {
  const deleteNote = useNotesStore((state) => state.delete);
  return useCallback(
    (id: number) => {
      return fetch(`${BASE_DB_URI}/notes/${id}`, {
        method: "DELETE",
      }).then(() => {
        deleteNote(id);
      });
    },
    [deleteNote],
  );
};
