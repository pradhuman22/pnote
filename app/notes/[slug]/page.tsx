import React, { Suspense } from "react";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNotes, getNoteBySlug } from "@/lib/notes";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  FolderIcon,
  TagIcon,
} from "lucide-react";
import Image from "next/image";
import { incrementNoteViews } from "../actions";
import { Metadata } from "next";
import RelatedNotes from "../_components/RelatedNotes";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);
  if (!note) {
    return {
      title: "Note not found",
    };
  }
  return {
    title: `${note.metadata.title} | Dev Note`,
    description: note.metadata.excerpt,
    openGraph: {
      title: note.metadata.title,
      description: note.metadata.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const notes = await getAllNotes();
  return notes.map((note) => ({
    slug: note.metadata.slug,
  }));
}

const NoteDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  await incrementNoteViews(slug);
  const note = await getNoteBySlug(slug);
  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-16">
      <div className="pt-8">
        <Link href={"/notes"} className="flex items-center">
          <ArrowLeftIcon className="mr-2 size-4" />
          Back to notes
        </Link>
      </div>
      {note ? (
        <>
          <article className="w-full py-6 ">
            <div className="relative mb-6 aspect-[3/2] h-[480px] w-full">
              <Image
                src={note?.metadata.thumbnail}
                alt={note?.metadata.title}
                fill
                priority
                quality={90}
                className="object-cover"
              />
            </div>
            <h1 className="text-xl font-semibold tracking-tighter sm:text-2xl md:text-3xl">
              {note?.metadata.title}
            </h1>
            <div className="text-muted-foreground my-2 flex items-center gap-4 text-sm">
              <ul className="text-muted-foreground mb-2.5 flex flex-wrap items-center gap-2 text-sm">
                <li className="flex items-center gap-1.5 border-r pr-1.5">
                  <ClockIcon className="size-3.5" />{" "}
                  <span>{note?.metadata.readingTime}</span>
                </li>
                <li className="flex items-center gap-1.5 border-r pr-1.5">
                  {" "}
                  <CalendarIcon className="size-3.5" />
                  <span>{formatDate(note?.metadata.publishedAt)}</span>
                </li>
                <li className="flex items-center space-x-1 border-r pr-1.5">
                  <EyeIcon className="size-3.5" />
                  <span>
                    {note.metadata.views && note.metadata.views == 0
                      ? "no views"
                      : `${note.metadata.views} ${note.metadata.views == 1 ? `view` : `views`}`}
                  </span>
                </li>
                <li className="flex items-center space-x-1">
                  <FolderIcon className="size-3.5" />
                  <span>{note?.metadata.category}</span>
                </li>
              </ul>
            </div>

            <div className="prose dark:prose-invert container mt-8 w-full max-w-screen-xl py-4">
              <Suspense fallback={<>Loading..</>}>
                <MDXRemote source={note?.content} />
              </Suspense>
            </div>
          </article>
          <div className="flex flex-wrap items-center gap-2 border-t py-4 ">
            <TagIcon className="size-3" />
            <span className="mr-4">Tags</span>
            {note?.metadata.tags.map((item, key) => (
              <Badge key={key}>{item}</Badge>
            ))}
          </div>
          <RelatedNotes category={note.metadata.category} limit={5} />
        </>
      ) : (
        <section className="bg-background">
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-28">
            <div className="mx-auto max-w-screen-sm text-center">
              <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Oops! Not Found
              </p>
              <p className="text-muted-foreground mb-4 text-lg font-light">
                Sorry, we can't find this note. You'll find lots to explore on
                the notes.{" "}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NoteDetailPage;
