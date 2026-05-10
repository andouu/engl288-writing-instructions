import Image from "next/image"
import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { GoInfo } from "react-icons/go"

export function Icon({ ...props }: ComponentProps<typeof Image>) {
  return <Image {...props} width={20} height={20} className="inline-block mb-1 mr-0.5" />
}

export function Divider() {
  return <hr className="border-neutral-200 w-full my-8" />
}

export function ImageShowcase({ caption, ...props }: { caption: string } & ComponentProps<typeof Image>) {
  return (
    <div className="w-full my-8 flex flex-col gap-2 items-center justify-center">
      <div className="w-full h-full rounded-xl overflow-hidden">
        <Image {...props} className={`h-auto w-full ${props.className ?? ""}`.trim()} />
      </div>
      <span className="text-center text-sm text-neutral-400">{caption}</span>
    </div>
  )
}

export function BigLink({ title, description, ...props }: { title: string, description: string } & ComponentProps<typeof Link>) {
  return <Link {...props}>
    <div className="w-full min-h-15 flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-neutral-200 hover:bg-neutral-100 transition-colors duration-150">
      <div className="flex flex-1 flex-col gap-0.5">
        <span className="leading-tight tracking-tight font-medium">{title}</span>
        <span className="leading-tight text-neutral-400 text-sm">{description}</span>
      </div>
      <span className="text-neutral-400">-&gt;</span>
    </div>
  </Link>
}

export function Section({ heading, children }: { heading: string, children?: ReactNode }) {
  return <section className="w-full">
    <h2 className="text-2xl tracking-tight font-medium mb-3">{heading}</h2>
    <div>
      {children}
    </div>
  </section>
}

export function Note({ heading, children }: { heading: string, children?: ReactNode }) {
  return <div className="p-4 my-4 w-full min-h-14 flex gap-4 rounded-lg bg-neutral-100">
    <div className="h-5 flex items-center text-neutral-500">
      <GoInfo />
    </div>
    <div className="flex flex-col gap-1">
      <h3 className="text-sm font-medium text-neutral-800">{heading}</h3>
      <p className="text-sm text-neutral-800">{children}</p>
    </div>
  </div>
}