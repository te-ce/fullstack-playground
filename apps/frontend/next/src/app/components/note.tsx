"use client";
import { useDeleteNote } from "@/api/notes";
import { Note as NoteProp } from "common/schemas";
import { useState } from "react";

export const Note = ({ note }: { note: NoteProp }) => {
  const [isLoading, setIsLoading] = useState(false);
  const deleteNote = useDeleteNote();

  const handleDelete = async () => {
    setIsLoading(true);
    await deleteNote(note.id).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <div className="flex h-fit max-w-96 min-w-52 flex-col items-start justify-start rounded-lg border border-cyan-900 bg-neutral-900 p-4 shadow-lg shadow-cyan-500/50">
      <div className="flex w-full items-center justify-between pb-3 text-sm text-slate-600">
        {isLoading ? (
          <>...Loading</>
        ) : (
          <>
            <h2 className="font-light italic">{note.author}</h2>
            <button
              className="px-4 py-1 font-bold hover:text-red-600"
              onClick={() => handleDelete()}
            >
              x
            </button>
          </>
        )}
      </div>
      <div className="text-xl">{note.description}</div>
    </div>
  );
};
