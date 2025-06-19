import { BoxIcon } from 'lucide-react';
import React from 'react';

const Logo = () => {
  return (
    <h1 className="flex items-center font-mono text-2xl font-bold lg:text-4xl">
      PN
      <BoxIcon className="fill-primary stroke-primary-foreground lg:size-10" />
      TE
    </h1>
  );
};

export default Logo;
