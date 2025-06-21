'use client';
import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import { navigationMenuItems } from '@/constant';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild className="cursor-pointer md:hidden">
        <Button variant={'ghost'} size={'icon'}>
          <MenuIcon className="size-6" />
          <span className="sr-only">Open Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetTitle>
          <span className="sr-only">PNOTE</span>
        </SheetTitle>
        <div className="grid pt-8">
          {navigationMenuItems.map((item, key) => (
            <Button
              asChild
              key={key}
              variant={'ghost'}
              className={cn('text-foreground/70 cursor-pointer justify-start text-base', {
                'text-foreground font-semibold': pathname == item.url,
              })}
            >
              <Link href={item.url}>
                <SheetClose>{item.label}</SheetClose>
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
