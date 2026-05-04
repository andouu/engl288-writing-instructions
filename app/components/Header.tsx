"use client";

import Link from "next/link";

export function Header() {
  return (
    <div
      className="z-100 w-full h-16 flex justify-center items-center"
    >
      <div className="w-full px-5 sm:px-8 lg:w-1/2 lg:px-0 flex items-center">
        <Link href="/" className="font-medium tracking-tight">
          Engl 288 Tutorials
        </Link>
        <div className="ml-auto flex items-center text-sm gap-1">
          <Link
            href="/tutorials"
            className="rounded-full px-3 py-1 border border-transparent hover:border-neutral-200 transition-colors duration-150"
          >
            Tutorials
          </Link>
          <Link
            href="/about"
            className="rounded-full px-3 py-1 border border-transparent hover:border-neutral-200 transition-colors duration-150"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
}
