"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { CalendarIcon, ClockIcon, EyeIcon, FolderIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecentNoteSection = ({ data }: { data: NoteMetadata[] }) => {
  return (
    <section className="relative w-full flex flex-col gap-y-4">
      {data.map((note, key) => (
        <Card key={key} className="items-center px-4 md:flex-row">
          <div className="relative aspect-[3/2] h-[200px] md:h-[180px]">
            <Image
              src={note.thumbnail}
              alt={note.title}
              priority
              fill
              quality={90}
              sizes="270px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="space-y-2">
              <h3 className="line-clamp-1 text-2xl font-semibold">
                {note.title}
              </h3>
              <ul className="flex flex-wrap items-center gap-2.5 text-xs">
                <li className="flex items-center gap-1.5">
                  <ClockIcon className="size-3.5" />
                  <span>{note.readingTime}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CalendarIcon className="size-3.5" />
                  <span>{formatDate(note.publishedAt)}</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <EyeIcon className="size-3.5" />
                  <span>
                    {note.views && note.views == 0
                      ? "no views"
                      : `${note.views} ${note.views == 1 ? `view` : `views`}`}
                  </span>
                </li>
                <li className="flex items-center gap-1.5">
                  <FolderIcon className="size-3.5" />
                  <span>{note.category}</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {note.tags.map((item, key) => (
                <Badge key={key} variant={"outline"} className="text-xs">
                  {item}
                </Badge>
              ))}
            </div>
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {note.excerpt}
            </p>
            <div className="flex items-center justify-end">
              <Button asChild variant={"link"} size={"sm"}>
                <Link href={`/notes/${note.slug}`}>Read more..</Link>
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default RecentNoteSection;
