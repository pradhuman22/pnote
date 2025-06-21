import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Something's missing.</p>
          <p className="text-muted-foreground mb-4 text-lg font-light">
            Sorry, we can't find that page. You'll find lots to explore on the home page.{' '}
          </p>
          <Button asChild>
            <Link href="/">Back to Homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
