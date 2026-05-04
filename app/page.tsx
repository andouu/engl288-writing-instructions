import Image from "next/image"
import Link from "next/link"
import { ComponentProps } from "react"

export default function Home() {
  return <div className="py-15">
    <h1 className="text-4xl tracking-tight font-semibold text-neutral-900">How to convert image file formats in MacOS</h1>
    <p className="text-neutral-500 mt-5 text-lg">
      MacOS can store image files in various different formats, such as .jpg, .png, and more. Learn the differences between each file format and how to use built-in tools to seamlessly convert between different file formats.
    </p>
    <div className="mt-12 flex flex-col gap-10 w-full">
      <Section heading="Prerequisite Information">
        <p className="">
          This resource is intended for devices using the latest version of MacOS and users who are familiar with Finder and image file formats. If this doesn&apos;t apply to you or this isn&apos;t the information you&apos;re looking for, the resources below may be helpful:
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          <BigLink href="/" title="How to find your device's MacOS version" description="Learn how to find out what version of MacOS your device is running" />
          <BigLink href="/" title="How to find my image file in Finder" description="Learn how to locate your saved image file in Finder, MacOS's file management app" />
          <BigLink href="/" title="What is an image file format?" description="Learn the differences between image file formats like .jpg and .png" />
        </ul>
      </Section>
      <Section heading="Locate the image file in Finder">
        {/* <p>Finder is an app built into MacOS you can use to manage files. It looks like this:</p>
        <ImageShowcase src="/finder.png" alt="Finder App Icon" width={75} height={75} caption="Finder App Icon" />
        <p>You can open it using the following ways:</p>
        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Click the Finder icon in the Dock</li>
          <li className="pl-1">Open Spotlight (⌘ + Space), type &quot;Finder&quot;, then press Return.</li>
        </ul>
        <Divider /> */}
        <p>First, locate the image file you want to change the format of in Finder <Icon src="/finder.png" alt="Finder App Icon" /></p>
        <ImageShowcase
          src="/open_in_finder.png"
          alt="Image showing an example of image files in Finder"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Example Finder window showing two image files, cat.jpg and cow.jpg"
        />
      </Section>
    </div>
  </div>
}

function Icon({ ...props }: ComponentProps<typeof Image>) {
  return <Image {...props} width={20} height={20} className="inline-block mb-1 mr-0.5" />
}

function Divider() {
  return <hr className="border-neutral-200 w-full my-8" />
}

function ImageShowcase({ caption, ...props }: { caption: string } & ComponentProps<typeof Image>) {
  return (
    <div className="w-full my-8 flex flex-col gap-2 items-center justify-center">
      <Image {...props} className={`h-auto w-full ${props.className ?? ""}`.trim()} />
      <span className="text-center text-sm text-neutral-400">{caption}</span>
    </div>
  )
}

function BigLink({ title, description, ...props }: { title: string, description: string } & ComponentProps<typeof Link>) {
  return <Link {...props}>
    <div className="w-full h-15 flex flex-col gap-0.5 justify-center px-3.5 rounded-xl border border-neutral-200 hover:bg-neutral-100">
      <span className="leading-tight tracking-tight font-medium">{title}</span>
      <span className="leading-tight text-neutral-400 text-sm">{description}</span>
    </div>
  </Link>
}

function Section({ heading, children }: { heading: string, children?: React.ReactNode }) {
  return <section className="w-full">
    <h2 className="text-2xl tracking-tight font-medium mb-3">{heading}</h2>
    <div>
      {children}
    </div>
  </section>
}