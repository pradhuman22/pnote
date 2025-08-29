import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BoxIcon, CopyrightIcon } from "lucide-react";
import { categoryItems, otherLinks, quickLinks, socialLinks } from "@/constant";
import NewsLetterForm from "./NewsLetterForm";

const Footer = () => {
  return (
    <footer className="bg-muted/90 relative w-full border-t">
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0 ">
          <div className="flex-[24%]">
            <div className="flex w-full flex-col gap-4">
              <div className="space-y-1">
                <h1 className="flex items-center justify-center font-mono text-xl font-bold lg:justify-start">
                  PN
                  <BoxIcon className="fill-primary stroke-primary-foreground size-6" />
                  TE
                </h1>
                <p className="text-center lg:text-left">
                  Hands-on notes and ideas for the developer.
                </p>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                {socialLinks.map((item, key) => (
                  <Button
                    key={key}
                    size={"icon"}
                    variant={"ghost"}
                    className={cn(item.className, "cursor-pointer")}
                    asChild
                  >
                    <Link href={item.url}>
                      <item.icon className="size-4.5" />
                      <span className="sr-only">{item.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1/3 flex flex-col lg:flex-row items-start gap-10">
            <div className="flex flex-col gap-3 lg:w-40">
              <h3 className="text-center text-xl font-bold lg:text-left">
                Quick Links
              </h3>
              <div className="grid gap-2 text-center lg:text-left">
                {quickLinks.map((item, key) => (
                  <Link href={item.url} key={key}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 lg:w-52">
              <h3 className="text-center text-xl font-bold lg:text-left">
                Other Links
              </h3>
              <div className="grid gap-2 text-center lg:text-left">
                {otherLinks.map((otherLink) => (
                  <Link href={otherLink.url} key={otherLink.title}>
                    {otherLink.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-1/3 grow flex-col gap-3 lg:px-4">
            <div>
              <h3 className="text-center text-xl font-medium lg:text-left">
                Subscribe to the NewsLetter
              </h3>
              <p className="text-muted-foreground text-center text-sm lg:text-left">
                Stay informed with latest news, and insights.
              </p>
            </div>
            <NewsLetterForm />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center border-t py-4">
        <p className="flex items-center text-sm">
          <CopyrightIcon className="fill-accent mr-1 size-3" />{" "}
          {new Date().getFullYear()} PNOTE, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
