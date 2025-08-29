"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";

import { formatDate } from "@/lib/utils";
import { CalendarIcon, ClockIcon, EyeIcon, FolderIcon } from "lucide-react";

const NoteCard = ({ note }: { note: NoteMetadata }) => {
  return (
    <Link href={`/notes/${note.slug}`} className="cursor-pointer">
      <Card className="rounded p-2 lg:p-4">
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
        <div className="p-0">
          <div className="space-y-1.5">
            <h1 className="line-clamp-1 text-xl font-bold">{note.title}</h1>
            <ul className="text-muted-foreground mb-2.5 flex flex-wrap items-center gap-2 text-sm">
              <li className="flex items-center gap-1.5 border-r pr-1.5">
                <ClockIcon className="size-3.5" />{" "}
                <span>{note.readingTime}</span>
              </li>
              <li className="flex items-center gap-1.5 border-r pr-1.5">
                {" "}
                <CalendarIcon className="size-3.5" />
                <span>{formatDate(note.publishedAt)}</span>
              </li>
              <li className="flex items-center space-x-1 border-r pr-1.5">
                <EyeIcon className="size-3.5" />
                <span>
                  {note.views && note.views == 0
                    ? "no views"
                    : `${note.views} ${note.views == 1 ? `view` : `views`}`}
                </span>
              </li>
              <li className="flex items-center space-x-1">
                <FolderIcon className="size-3.5" />
                <span>{note.category}</span>
              </li>
            </ul>
            <div className="line-clamp-1 text-sm text-purple-500">
              {note.tags.join(", ")}
            </div>
          </div>
          <div className="mt-2">
            <p className="text-muted-foreground line-clamp-2 text-base">
              {note.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NoteCard;
