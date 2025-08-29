import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { categoryItems } from "@/constant";

const CategorySection = () => {
  return (
    <section className="relative flex flex-col gap-5 py-10">
      <h1 className="mb-5 uppercase w-full text-center text-3xl font-semibold lg:mb-10">
        Categories
      </h1>
      <div className="grid gap-3.5 lg:grid-cols-4">
        {categoryItems.map((categoryItem) => (
          <Button
            asChild
            key={categoryItem.label}
            className={cn("h-14", categoryItem.tailwindStyle)}
          >
            <Link
              href={`/notes?category=${encodeURIComponent(
                categoryItem.label.toLowerCase(),
              )}`}
            >
              <categoryItem.icon className="size-4" />
              {categoryItem.label}
            </Link>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
