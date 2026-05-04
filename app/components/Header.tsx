"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const showBorder = pathname !== "/";

  return (
    <div
      className={`w-full h-12 flex justify-center items-center border-b ${showBorder ? "border-neutral-200" : "border-transparent"}`}
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
