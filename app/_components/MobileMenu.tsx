"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, SendIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { menuItems } from "@/constant";

const MobileMenu = () => {
  const pathname = usePathname();
  const isActive = (url: string) => {
    return pathname.split("/")[1] == url.replace("/", "");
  };
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon className="size-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-2/3">
        <SheetTitle>
          <span className="sr-only">PNOTE</span>
        </SheetTitle>
        <div className="grid pt-8">
          {menuItems.map((menuItem) => (
            <Button
              asChild
              key={menuItem.title}
              variant={"ghost"}
              className={cn(
                "text-foreground/65 cursor-pointer text-base justify-start",
                {
                  "text-foreground": isActive(menuItem.url),
                }
              )}
            >
              <Link href={menuItem.url}>
                <menuItem.icon />
                {menuItem.title}
              </Link>
            </Button>
          ))}
        </div>
        <SheetFooter>
          <Button asChild>
            <Link href={"/contact"}>
              <SendIcon className="size-4" />
              Let's Talk
            </Link>
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
