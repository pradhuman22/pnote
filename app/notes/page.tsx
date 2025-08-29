import React from "react";
import PopularNotesSection from "../_components/PopularNotesSection";
import { getNotesMetadata } from "@/lib/notes";
import TagListSection from "../_components/TagListSection";
import NoteList from "./_components/NoteList";

const NotesListPage = async () => {
  const notes = await getNotesMetadata(4);
  return (
    <section className="container mx-auto max-w-screen-xl px-4 md:px-16 pt-5 pb-10">
      <div className="grid lg:grid-cols-12 gap-10">
        {/* content */}
        <div className="lg:col-span-7 xl:col-span-8">
          <NoteList notes={notes} />
        </div>
        {/* right sidebar */}
        <div className="lg:col-span-5 xl:col-span-4">
          <h1 className="w-full mb-5 uppercase font-semibold text-xl">
            Popular Notes
          </h1>
          <PopularNotesSection notes={notes} />
          <h1 className="w-full mt-8 mb-5 uppercase font-semibold text-xl">
            Featured Tags
          </h1>
          <TagListSection />
        </div>
      </div>
    </section>
  );
};

export default NotesListPage;
