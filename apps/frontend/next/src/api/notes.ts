import { useNotesStore } from "@/stores/notesStore";
import { BASE_DB_URI } from "@/util/variables";
import { Note, noteSchema } from "common";
import { useCallback } from "react";

export const useCreateNote = () => {
  const createNote = useNotesStore((state) => state.create);
  return useCallback(
    (newNote: Note) => {
      return fetch(`${BASE_DB_URI}/notes/`, {
        method: "POST",
        body: JSON.stringify({ newNote }),
      }).then(() => {
        createNote(newNote);
      });
    },
    [createNote],
  );
};

export const useGetNote = () => {
  const createNote = useNotesStore((state) => state.create);
  return useCallback(
    async (id: number) => {
      const data = await fetch(`${BASE_DB_URI}/notes/${id}`);
      const newNote = noteSchema.parse(await data.json());
      createNote(newNote);
    },
    [createNote],
  );
};

export const useUpdateNote = () => {
  const updateNote = useNotesStore((state) => state.update);
  return useCallback(
    (updatedNote: Note) => {
      return fetch(`${BASE_DB_URI}/notes/${updatedNote.id}`, {
        method: "PUT",
        body: JSON.stringify({ updatedNote }),
      }).then(() => {
        updateNote(updatedNote);
      });
    },
    [updateNote],
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
