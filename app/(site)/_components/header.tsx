import React from 'react';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { ModeToggle } from './mode-toggle';
import Navigation from './navigation';
import SearchBox from './search-box';
import { getNotesMetadata } from '@/lib/notes';

const Header = async () => {
  const notes = await getNotesMetadata();
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <nav className="container mx-auto flex h-16 max-w-screen-xl items-center justify-between px-2 md:px-4">
        <div className="flex items-center gap-1.5">
          <MobileMenu />
          <Logo />
        </div>
        <Navigation />
        <div>
          <SearchBox data={notes} />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
