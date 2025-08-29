import { Badge } from "@/components/ui/badge";
import { tagItems } from "@/constant";
import Link from "next/link";
import React from "react";

const TagListSection = () => {
  return (
    <section className="relative w-full flex flex-wrap items-center gap-1.5">
      {tagItems.map((tagItem) => (
        <Link
          href={`/notes?tag=${tagItem}`}
          key={tagItem}
          className="cursor-pointer text-base font-semibold"
        >
          <Badge variant={"outline"}>{tagItem}</Badge>
        </Link>
      ))}
    </section>
  );
};

export default TagListSection;
