"use client";
import { Note as NoteProp } from "common/schemas";
import { useNotesStore } from "../../stores/notesStore";

export const Note = ({ note }: { note: NoteProp }) => {
  const deleteNote = useNotesStore((state) => state.delete);

  return (
    <div className="flex min-w-52 max-w-96 flex-col items-start justify-center rounded-lg border border-cyan-900 bg-neutral-900 p-4 shadow-lg shadow-cyan-500/50">
      <div className="flex w-full items-center justify-between pb-3 text-sm text-slate-600">
        <h2 className="font-light italic">{note.author}</h2>
        <button
          className="px-4 py-1 font-bold hover:text-red-600"
          onClick={() => deleteNote(note.id)}
        >
          x
        </button>
      </div>
      <div className="text-xl">{note.description}</div>
    </div>
  );
};
