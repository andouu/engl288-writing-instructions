"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TUTORIAL_ROUTES } from "../tutorials/routes";

export function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname === "/") {
    return null;
  }

  return <div className="w-full h-[50dvh] flex flex-col items-center border-t border-neutral-200 bg-neutral-50">
    <div className="w-1/2 flex-1 flex items-baseline gap-10 py-15">
      <div className="flex-1">
        <h2 className="text-2xl font-medium tracking-tight text-neutral-800">Engl 288 Tutorials</h2>
        <p className="mt-4 text-sm text-neutral-500">Spring 2026</p>
      </div>
      <div className="flex-2 flex items-baseline justify-between">
        <div className="flex flex-col">
          <h3 className="font-medium text-lg">Tutorials</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm font-normal">
            {TUTORIAL_ROUTES.map(({ title, slug }) => (
              <li key={slug}>
                <Link href={`/tutorials/${slug}`} className="hover:underline">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-medium text-lg">Resources</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm font-normal">
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-1/2 flex items-center justify-between pb-6 text-sm text-neutral-500">
      <span>© {currentYear} Andrew Zhou</span>
      <Link
        href="https://github.com/andouu/engl288-writing-instructions"
        target="_blank"
        rel="noreferrer"
        className="hover:underline"
      >
        GitHub
      </Link>
    </div>
  </div>;
}