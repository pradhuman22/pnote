import React, { PropsWithChildren } from 'react';
import Header from './_components/header';
import Footer from './_components/footer';

const SiteLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 grow">{children}</main>
      <Footer />
    </div>
  );
};

export default SiteLayout;
