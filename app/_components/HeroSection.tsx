"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BoxIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  FolderIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = ({ data }: { data: NoteMetadata }) => {
  return (
    <section className="relative mb-10 flex flex-col gap-5">
      <div className="flex w-full flex-col items-center gap-1.5 py-10 font-semibold lg:gap-4 lg:py-20">
        <h1 className="flex items-center text-2xl lg:text-8xl">
          <span>WELCOME TO PN</span>
          <BoxIcon className="fill-primary stroke-primary-foreground size-7 lg:size-28" />
          <span>TE</span>
        </h1>
        <p className="text-center text-lg capitalize lg:text-5xl">
          Discover creative notes and ideas
        </p>
      </div>
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
        <div className="relative aspect-[16/9] h-60 lg:h-80">
          <Image
            src={data.thumbnail}
            alt={data.title}
            priority
            fill
            quality={90}
            sizes="(min-width: 1040px) 569px, (min-width: 440px) calc(100vw - 32px), calc(23.33vw + 290px)"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col lg:px-4">
          <h3 className="mb-3 line-clamp-1 text-xl font-semibold lg:text-4xl">
            {data.title}
          </h3>
          <ul className="text-muted-foreground mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <li className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5" />
              <span>{data.readingTime}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              <span>{formatDate(data.publishedAt)}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <EyeIcon className="size-3.5" />
              <span>
                {data.views && data.views == 0
                  ? "no views"
                  : `${data.views} ${data.views == 1 ? `view` : `views`}`}
              </span>
            </li>
            <li className="flex items-center gap-1.5">
              <FolderIcon className="size-3.5" />
              <span>{data.category}</span>
            </li>
          </ul>
          <p className="mb-3 line-clamp-2 text-sm lg:line-clamp-3 lg:text-base">
            {data.excerpt}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {data.tags.map((item, key) => (
              <Badge
                key={key}
                variant={"outline"}
                className="capitalize lg:text-xs"
              >
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex">
            <Button
              asChild
              className="ml-auto w-full lg:ml-0 lg:h-12 lg:w-fit lg:px-8"
            >
              <Link href={`/notes/${data.slug}`}>Read more..</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
