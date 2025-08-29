import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, ClockIcon, EyeIcon, FolderIcon } from "lucide-react";
import Link from "next/link";

const PopularNotesSection = ({ notes }: { notes: NoteMetadata[] }) => {
  return (
    <section className="relative w-full space-y-4">
      {notes.length > 0 ? (
        notes.map((note, key) => (
          <Link
            href={`/notes/${note.slug}`}
            key={key}
            className="group flex cursor-pointer flex-col"
          >
            <Card
              key={key}
              className="group-hover:bg-muted/10 flex flex-row items-center gap-0 px-4"
            >
              <div className="relative aspect-square h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src={note.thumbnail}
                  alt={note.title}
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                />
              </div>
              <CardContent className="flex-1">
                <h3 className="mb-1 line-clamp-1 text-lg font-semibold">
                  {note.title}
                </h3>
                <ul className="flex flex-wrap items-center gap-1.5 text-xs">
                  <li className="flex items-center gap-1">
                    <ClockIcon className="size-3" />
                    <span>{note.readingTime}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CalendarIcon className="size-3" />
                    <span>{formatDate(note.publishedAt)}</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <EyeIcon className="size-3" />
                    <span>
                      {note.views && note.views == 0
                        ? "no views"
                        : `${note.views} ${note.views == 1 ? `view` : `views`}`}
                    </span>
                  </li>
                  <li className="flex items-center gap-1">
                    <FolderIcon className="size-3" />
                    <span>{note.category}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        ))
      ) : (
        <p>No Notes Found</p>
      )}
    </section>
  );
};

export default PopularNotesSection;
