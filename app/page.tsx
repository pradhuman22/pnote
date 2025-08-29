import { getNotesMetadata } from "@/lib/notes";
import HeroSection from "./_components/HeroSection";
import CategorySection from "./_components/CategorySection";
import PopularNotesSection from "./_components/PopularNotesSection";
import RecentNoteSection from "./_components/RecentNotesSection";
import TagListSection from "./_components/TagListSection";

export default async function Home() {
  const notes = await getNotesMetadata(4);
  const popularNotes = notes.sort((a, b) => b.views - a.views).slice(0, 4);
  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-16">
      <HeroSection data={notes[0]} />
      <CategorySection />
      <div className="flex flex-col gap-10 py-5 lg:flex-row lg:py-10">
        <div className="flex-1 flex-grow">
          <h1 className="mb-5 uppercase w-full text-center text-3xl font-semibold lg:text-left">
            Recent Notes
          </h1>
          <RecentNoteSection data={notes} />
        </div>
        <div className="w-full lg:max-w-md">
          <h1 className="w-full uppercase mb-5 text-center text-3xl font-semibold lg:text-left">
            Popular Notes
          </h1>
          <PopularNotesSection notes={popularNotes} />
          <h1 className="my-5 uppercase w-full text-center text-3xl font-semibold lg:text-left">
            Featured Tags
          </h1>
          <TagListSection />
        </div>
      </div>
    </div>
  );
}
