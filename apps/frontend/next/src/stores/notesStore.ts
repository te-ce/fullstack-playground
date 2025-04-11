import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { Note } from "common/schemas";
interface NoteState {
  notes: Note[];
  create: (note: Note) => void;
  update: (note: Note) => void;
  delete: (id: number) => void;
}

const notes: Note[] = [];

export const useNotesStore = create<NoteState>()(
  devtools(
    (set) => ({
      notes: [...notes],

      create: (newNote) =>
        set((state) => {
          const exists = state.notes.some((note) => note.id === newNote.id);
          const updatedItems = exists
            ? state.notes.map((item) =>
                item.id === newNote.id ? newNote : item,
              )
            : [...state.notes, newNote];
          return { notes: updatedItems };
        }),

      update: (updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) => {
            if (note.id === updatedNote.id) {
              note = updatedNote;
            }
            return note;
          }),
        })),

      delete: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: "note-storage",
    },
  ),
);
