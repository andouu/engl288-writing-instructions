import Link from "next/link";

export default function NotFound() {
  return <div className="flex min-h-[calc(100dvh-4rem)] justify-center items-center px-5 py-12">
    <div className="flex flex-col justify-center items-center gap-5 pb-20">
      <h1 className="font-medium text-4xl">404 Not Found</h1>
      <span className="text-center max-w-lg">Sorry, we couldn&apos;t find what you were looking for. Click <Link href="/" className="underline">here</Link> to go back to the home page.</span>
    </div>
  </div>
}