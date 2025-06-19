import React, { PropsWithChildren } from 'react';
import Header from './_components/header';

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default SiteLayout;
