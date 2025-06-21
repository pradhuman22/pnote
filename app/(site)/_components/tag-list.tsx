import { Badge } from '@/components/ui/badge';
import { tags } from '@/constant';
import Link from 'next/link';
import React from 'react';

const TagListSection = () => {
  return (
    <section className="relative w-full py-10">
      <h1 className="mb-5 w-full text-center text-3xl font-semibold lg:text-left">
        Explore Notes By Tags
      </h1>
      <div className="flex flex-wrap items-center gap-1.5">
        {tags.map((tag, key) => (
          <Link
            href={`/notes?tag=${tag}`}
            key={key}
            className="cursor-pointer text-base font-semibold"
          >
            <Badge variant={'outline'}>{tag}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TagListSection;
