import { Button } from '@/components/ui/button';
import { categories } from '@/constant';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const CategoryListSection = () => {
  return (
    <section className="relative flex flex-col gap-5 py-10">
      <h1 className="mb-5 w-full text-center text-3xl font-semibold lg:mb-10 lg:text-5xl">
        Notes Categories
      </h1>
      <div className="grid gap-3.5 lg:grid-cols-4">
        {categories.map((item, key) => (
          <Button asChild key={key} className={cn('h-14', item.tailwindStyle)}>
            <Link href={`/notes?category=${item.label.toLowerCase()}`}>
              <item.icon className="size-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategoryListSection;
