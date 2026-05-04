import Image from "next/image";

export default function Home() {
  return <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center">
    <div className="w-1/2 pb-10">
      <div className="relative w-full h-100 flex justify-center items-center border border-neutral-200 rounded-2xl">
        <Image src="/finder.png" alt="Finder app icon" width={125} height={125} style={{ transform: "translate(-25px, 15px) rotate(-12deg)" }} />
        <Image src="/preview.png" alt="Finder app icon" width={145} height={145} style={{ transform: "translate(0, -18px) rotate(5deg)" }} />
        <Image src="/safari.png" alt="Finder app icon" width={120} height={120} style={{ transform: "translate(20px, 30px) rotate(30deg)" }} />
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-15 gap-4">
        <h1 className="text-3xl font-medium tracking-tight text-neutral-800">Your hub for all things Apple related.</h1>
        <h2 className="text-lg tracking-tight text-neutral-500 text-center max-w-xl leading-tight">Tutorials that teach you how to become a power user for all your Apple devices, like Mac, iPhone, and more</h2>
      </div>
    </div>
  </div>
}