"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/constant";

const Navigation = () => {
  const pathname = usePathname();
  const isActive = (url: string) => {
    return pathname.split("/")[1] == url.replace("/", "");
  };

  return (
    <NavigationMenu className="hidden md:flex ml-20">
      <NavigationMenuList>
        {menuItems.map((menuItem) => (
          <NavigationMenuItem key={menuItem.title}>
            <NavigationMenuLink
              asChild
              className={cn(
                navigationMenuTriggerStyle(),
                "text-lg text-foreground/65",
                {
                  "text-foreground font-medium": isActive(menuItem.url),
                }
              )}
            >
              <Link href={menuItem.url}>{menuItem.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
