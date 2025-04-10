import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { Note } from "common/schemas";
interface NoteState {
  notes: Note[];
  create: (note: Note) => void;
  delete: (id: number) => void;
}

const notes: Note[] = [];

export const useNotesStore = create<NoteState>()(
  devtools(
    (set) => ({
      notes: [...notes],
      create: (note) => set((state) => ({ notes: [...state.notes, note] })),
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
