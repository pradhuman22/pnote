import { getNotesMetadata } from '@/lib/notes';
import CategoryListSection from './_components/category-list';
import HeroSection from './_components/hero';
import RecentNoteSection from './_components/recent-note';
import PopularNoteSection from './_components/popular-note';
import TagListSection from './_components/tag-list';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const notes = await getNotesMetadata(4);
  const popularNotes = notes.sort((a, b) => b.views - a.views).slice(0, 4);
  return (
    <div className="container mx-auto max-w-screen-xl px-4">
      <HeroSection data={notes[0]} />
      <CategoryListSection />
      <div className="flex flex-col gap-10 py-5 lg:flex-row lg:py-10">
        <div className="flex-1 flex-grow">
          <RecentNoteSection data={notes} />
        </div>
        <div className="w-full lg:max-w-md">
          <PopularNoteSection notes={popularNotes} />
          <TagListSection />
        </div>
      </div>
    </div>
  );
}
