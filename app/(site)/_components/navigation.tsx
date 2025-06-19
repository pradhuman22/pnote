'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { navigationMenuItems } from '@/constant';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {navigationMenuItems.map((item, key) => (
          <NavigationMenuItem key={key}>
            <NavigationMenuLink
              href={item.url}
              className={cn(
                navigationMenuTriggerStyle(),
                'hover:bg-background bg-background text-foreground/90 text-base',
                {
                  'text-foreground font-semibold': pathname == item.url,
                },
              )}
            >
              {item.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
