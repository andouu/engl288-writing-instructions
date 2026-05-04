import Link from "next/link";

export function Header() {
  return <div className="w-full h-12 flex justify-center items-center border-b border-neutral-200">
    <div className="w-1/2 flex items-center">
      <span className="font-medium tracking-tight">
        Engl 288 Tutorials
      </span>
      <div className="ml-auto flex items-center text-sm">
        <Link href="/about" className="rounded-lg px-2 py-1 border border-transparent hover:bg-neutral-100 hover:border-neutral-200 transition-colors duration-150">About</Link>
      </div>
    </div>
  </div>
}