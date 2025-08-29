"use client";
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const SearchBox = ({ data }: { data: NoteMetadata[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        setOpen(!open);
      }}
    >
      <DialogTrigger asChild className="cursor-pointer">
        <Button size={"icon"} variant={"ghost"}>
          <SearchIcon className="h-[1.25rem] w-[1.25rem]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-xs md:max-w-3xl">
        <DialogTitle>Search Note By Title</DialogTitle>
        <DialogDescription />
        <Command>
          <CommandInput placeholder="Enter your search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {data.map((note) => (
              <CommandItem key={note.slug} className="py-4 first:mt-5">
                <Link
                  href={`/notes/${note.slug}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {note.title}
                </Link>
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBox;
