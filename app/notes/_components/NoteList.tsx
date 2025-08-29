"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categoryItems } from "@/constant";
import NoteCard from "./NoteCard";

const NoteList = ({ notes }: { notes: NoteMetadata[] }) => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<NoteMetadata[]>(notes);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreData = useCallback(() => {
    if (isLoading || !hasMore) return; // Prevent multiple calls and stop if no more data

    setIsLoading(true);
    setTimeout(() => {
      const moreData = data.slice(page * 10, (page + 1) * 10); // Load 10 items per page
      if (moreData.length > 0) {
        setData((currentData) => [...currentData, ...moreData]);
        setPage((currentPage) => currentPage + 1);
      } else {
        setHasMore(false); // No more data to load
      }
      setIsLoading(false);
    }, 1000); // Simulate network delay
  }, [isLoading, hasMore, page, data]);
  const onScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      !isLoading
    ) {
      loadMoreData();
    }
  }, [isLoading, loadMoreData]);
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);
  useEffect(() => {
    const category = searchParams.get("category");
    const tags = searchParams.get("tag");
    if (category) {
      setData(
        notes.filter(
          (item) => item.category.toLowerCase() == category.toLowerCase(),
        ),
      );
    } else if (tags) {
      setData(notes.filter((item) => item.tags.includes(tags)));
    } else {
      setData(notes); // Reset to all notes if no category or tags are selected
    }
  }, [searchParams, notes]);
  return (
    <>
      {/* <div className="bg-accent flex flex-col items-center justify-center gap-3 py-14">
        <h1 className="text-center text-3xl font-semibold capitalize lg:text-6xl">
          {searchParams.get("category")?.split(" & ")[0] === "Backend"
            ? "Backend"
            : searchParams.get("category") ||
              searchParams.get("tag") ||
              "Our Note"}
        </h1>
        <p className="max-w-3xl text-center text-xl leading-normal">
          {searchParams.get("category")
            ? categoryItems.find(
                (cat) =>
                  cat.label.toLowerCase() ===
                  decodeURIComponent(searchParams.get("category") || ""),
              )?.description
            : ""}
        </p>
      </div> */}
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-5 py-4 lg:flex-row">
        <div className="flex-1 grow">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {data.map((note, key) => (
              <NoteCard note={note} key={key} />
            ))}
          </div>
          <div className="pt-8 text-center">
            {isLoading && hasMore && <p>Loading more notes...</p>}{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteList;
