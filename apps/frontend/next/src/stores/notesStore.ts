import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type {} from "@redux-devtools/extension";
import { Note } from "common/schemas";
interface NoteState {
  notes: Note[];
  add: (note: Note) => void;
  delete: (id: number) => void;
}

const notes: Note[] = [
  {
    author: "author1",
    description:
      "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
    title: "title1",
    id: 1,
  },
  { author: "author2", description: "lorem ipsum", title: "752", id: 2 },
];

export const useNotesStore = create<NoteState>()(
  devtools(
    (set) => ({
      notes: [...notes],
      add: (note) => set((state) => ({ notes: [...state.notes, note] })),
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
