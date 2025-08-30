import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { ModeToggle } from "./ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SendIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { getNotesMetadata } from "@/lib/notes";
import SearchBox from "./SearchBox";

const Header = async () => {
  const notes = await getNotesMetadata();
  return (
    <header className="sticky top-0 border-b shadow bg-background z-50">
      <div className="container mx-auto max-w-screen-xl  md:px-16 px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <MobileMenu />
            <Logo />
          </div>
          <Navigation />
          <div className="flex items-center gap-5">
            <div className="flex items-center md:gap-2">
              <SearchBox data={notes} />
              <ModeToggle />
            </div>
            <Button
              size={"lg"}
              asChild
              className="cursor-pointer text-base hidden md:flex"
            >
              <Link href={"/contact"}>
                <SendIcon className="size-4" />
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
