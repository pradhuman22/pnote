import React from "react";
import Link from "next/link";
import { BoxIcon } from "lucide-react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h1 className="flex items-center text-2xl font-semibold">
        PN
        <BoxIcon className="fill-primary size-8 stroke-primary-foreground" />
        TE
      </h1>
    </Link>
  );
};

export default Logo;
