import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="flex min-h-[calc(100dvh-4rem)] items-center justify-center py-12">
    <div className="w-full pb-10">
      <div className="relative w-full h-64 sm:h-80 lg:h-100 flex justify-center items-center border border-neutral-200 rounded-2xl">
        <Image src="/finder.png" alt="Finder app icon" width={125} height={125} className="h-auto w-[92px] shrink-0 -translate-x-4 translate-y-3 -rotate-12 sm:w-[110px] sm:-translate-x-5 lg:w-[125px] lg:-translate-x-[25px] lg:translate-y-[15px]" />
        <Image src="/preview.png" alt="Preview app icon" width={145} height={145} className="h-auto w-[106px] shrink-0 -translate-y-3 rotate-[5deg] sm:w-[128px] sm:-translate-y-4 lg:w-[145px] lg:-translate-y-[18px]" />
        <Image src="/safari.png" alt="Safari app icon" width={120} height={120} className="h-auto w-[88px] shrink-0 translate-x-3 translate-y-5 rotate-[30deg] sm:w-[106px] sm:translate-x-4 sm:translate-y-6 lg:w-[120px] lg:translate-x-5 lg:translate-y-[30px]" />
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-15 gap-4">
        <h1 className="text-center text-3xl font-medium tracking-tight text-neutral-800">Your hub for all things Apple related.</h1>
        <h2 className="text-lg tracking-tight text-neutral-500 text-center max-w-xl leading-tight">Tutorials that teach you how to become a power user for all your Apple devices, like Mac, iPhone, and more</h2>
        <Link href="/tutorials" className="mt-4 w-fit rounded-full border border-neutral-200 px-5 py-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
          See Tutorials
        </Link>
      </div>
    </div>
  </div>
}