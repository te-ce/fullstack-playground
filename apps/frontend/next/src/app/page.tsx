import { Header } from "./components/header";
import { NoteForm } from "./components/noteForm";
import { Notes } from "./components/notes";
import { Footer } from "./components/footer";
import { notesSchema } from "common";
import { BASE_DB_URI } from "@/util/variables";

export default async function Home() {
  const data = await fetch(`${BASE_DB_URI}/notes`);
  const notes = notesSchema.parse(await data.json());

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Header />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <NoteForm />
        <Notes notes={notes} />
      </main>
      <Footer />
    </div>
  );
}
