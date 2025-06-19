import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { trendingNote } from '@/constant';
import { Button } from '@/components/ui/button';
import { BoxIcon, CalendarIcon, ClockIcon, EyeIcon, FolderIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const HeroSection = () => {
  return (
    <section className="fle relative flex-col gap-5">
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
        <div className="relative aspect-video h-60 lg:h-80">
          <Image
            src={trendingNote.thumbnail}
            alt={trendingNote.title}
            fill
            priority
            quality={90}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col lg:px-4">
          <h3 className="mb-3 line-clamp-1 text-xl font-semibold lg:text-4xl">
            {trendingNote.title}
          </h3>
          <ul className="text-muted-foreground mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
            <li className="flex items-center gap-1.5">
              <ClockIcon className="size-3.5" />
              <span>{trendingNote.readingTime}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CalendarIcon className="size-3.5" />
              <span>{formatDate(trendingNote.publishedAt)}</span>
            </li>
            <li className="flex items-center gap-1.5">
              <EyeIcon className="size-3.5" />
              <span>No Views</span>
            </li>
            <li className="flex items-center gap-1.5">
              <FolderIcon className="size-3.5" />
              <span>{trendingNote.category}</span>
            </li>
          </ul>
          <p className="mb-3 line-clamp-2 text-sm lg:line-clamp-3 lg:text-base">
            {trendingNote.excerpt}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {trendingNote.tags.map((item, key) => (
              <Badge key={key} variant={'outline'} className="capitalize lg:text-sm">
                {item}
              </Badge>
            ))}
          </div>
          <div className="flex">
            <Button asChild className="ml-auto lg:ml-0">
              <Link href={`/notes/${trendingNote.title}`}>Read more..</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
