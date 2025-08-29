import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getRelatedNotes } from "@/lib/notes";
import { CalendarIcon, ClockIcon } from "lucide-react";
import Link from "next/link";

const RelatedNotes = async ({
  category,
  limit,
}: {
  category: string;
  limit: number;
}) => {
  const notes = await getRelatedNotes({
    category,
    limit,
  });
  return (
    <section className="container mx-auto pt-4 pb-8">
      <h1 className="mb-5 w-full text-center text-3xl font-semibold lg:text-left">
        Related Notes
      </h1>
      <div className="grid lg:grid-cols-4 lg:gap-5">
        {notes.map((note, key) => (
          <Link href={`/notes/${note.slug}`} key={key}>
            <Card className="overflow-hidden pt-0">
              <div className="relative aspect-video">
                <Image
                  src={note.thumbnail}
                  alt="hero"
                  fill
                  priority
                  quality={90}
                  className="object-cover object-top-right"
                />
              </div>
              <CardContent className="px-2">
                <CardTitle className="line-clamp-1">{note.title}</CardTitle>
                <CardDescription className="flex items-center gap-1 py-2 text-xs">
                  <ClockIcon className="size-3" />
                  <span>{note.readingTime}</span>
                  <CalendarIcon className="size-3" />
                  <span>
                    {new Date(note.publishedAt).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                </CardDescription>
                <div className="line-clamp-1">{note.excerpt}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedNotes;
