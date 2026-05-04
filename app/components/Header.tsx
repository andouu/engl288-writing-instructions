"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  return (
    <div
      className="z-100 w-full h-16 flex justify-center items-center"
    >
      <div className="w-1/2 flex items-center">
        <Link href="/" className="font-medium tracking-tight">
          Engl 288 Tutorials
        </Link>
        <div className="ml-auto flex items-center text-sm gap-1">
          <Link
            href="/tutorials"
            className="rounded-lg px-2 py-1 border border-transparent hover:bg-neutral-100 hover:border-neutral-200 transition-colors duration-150"
          >
            Tutorials
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-2 py-1 border border-transparent hover:bg-neutral-100 hover:border-neutral-200 transition-colors duration-150"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
