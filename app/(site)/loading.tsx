import { Loader2 } from 'lucide-react';
import React from 'react';

const LoadingPage = () => {
  return (
    <div className="container mx-auto flex min-h-screen max-w-screen-xl items-center justify-center">
      <div className="flex items-center text-2xl">
        <Loader2 className="size-6 animate-spin" /> <span>Loading..</span>
      </div>
    </div>
  );
};

export default LoadingPage;
