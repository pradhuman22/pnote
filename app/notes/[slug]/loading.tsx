import { Loader2 } from "lucide-react";
import React from "react";

const NoteDetailLoadingPage = () => {
  return (
    <div className="max-w-screen-xl container mx-auto px-4 md:px-16 py-40">
      <div className="flex items-center justify-center text-3xl">
        <Loader2 className="animate-spin h-8 w-8 mr-2" />
        Note will be loading soon..
      </div>
    </div>
  );
};

export default NoteDetailLoadingPage;
