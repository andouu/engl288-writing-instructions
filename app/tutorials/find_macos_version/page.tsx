import { BigLink, Icon, ImageShowcase, Section } from "@/app/components/TutorialComponents";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function FindMacosVersion() {
  return <div className="py-15">
    <h1 className="text-4xl tracking-tight font-semibold text-neutral-900">How to find your device&apos;s MacOS version</h1>
    <p className="text-neutral-500 mt-5 text-lg">
      Learn where to check your Mac&apos;s system settings so you can confirm the exact MacOS version your device is currently running.
    </p>
    <div className="mt-12 flex flex-col gap-10 w-full">
      <Section heading="Prerequisite Information">
        <p className="">
          {"This guide is intended for users of"} <Link className="hover:underline" href="https://www.apple.com/mac/" target="_blank">MacOS devices</Link> <GoLinkExternal className="inline mb-1 stroke-1 opacity-50" />{". If this doesn't apply to you or this isn't the information you're looking for, the resources below may be helpful:"}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          <BigLink href="/" title="How to find your device's MacOS version" description="Learn how to find out what version of MacOS your device is running" />
          <BigLink href="/" title="How to find my image file in Finder" description="Learn how to locate your saved image file in Finder, MacOS's file management app" />
          <BigLink href="/" title="What is an image file format?" description="Learn the differences between image file formats like .jpg and .png" />
        </ul>
      </Section>
      <Section heading="Locate the Menu Bar">
        {/* <p>Finder is an app built into MacOS you can use to manage files. It looks like this:</p>
        <ImageShowcase src="/finder.png" alt="Finder App Icon" width={75} height={75} caption="Finder App Icon" />
        <p>You can open it using the following ways:</p>
        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Click the Finder icon in the Dock</li>
          <li className="pl-1">Open Spotlight (⌘ + Space), type &quot;Finder&quot;, then press Return.</li>
        </ul>
        <Divider /> */}
        <p>{"At the top of your mac device, you will see a menu bar. It's where you find information like the time and date, your battery percentage (if applicable), and other diagnostic information."}</p>
        <ImageShowcase
          src="/menu_bar.png"
          alt="Image showing what the menu bar looks like"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Example menu bar"
        />
        <p>{"Locate the Apple logo  at the very left of the menu bar. It looks like this:"}</p>
        <ImageShowcase
          src="/apple_button.png"
          alt="Image showing what the apple button in the menu bar looks like"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Apple button in the menu bar"
        />
      </Section>
      <Section heading="See Mac Device Information">
        <p>{"Click on the Apple logo. A dropdown will appear. Then, click the \"About This Mac\" option."}</p>
        <ImageShowcase
          src="/about_this_mac_dropdown.png"
          alt="Image showing what the Apple button dropdown in the menu bar shows"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption={"Dropdown with different Mac settings, with the \"About This Mac\" option highlighted"}
        />
        <p>{"A popup will appear on your screen with information about your Mac device. There, you will see the MacOS version your device is running."}</p>
        <ImageShowcase
          src="/mac_device_info.png"
          alt="Image showing Mac device info"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption={"Popup shown after clicking \"About This Mac\""}
        />
        <p>{"In the example above, the device is running MacOS Tahoe 26.0.1. The version shown in your popup is the version your device is running."}</p>
      </Section>
      <Section heading="Conclusion">
        <p>Congrats, you&apos;ve successfully exported your file in a different format!</p>
        <div className="mt-8">
          <Link href="/tutorials" className="w-fit rounded-full border border-neutral-200 px-5 py-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
            &lt;- All Tutorials
          </Link>
        </div>
      </Section>
    </div>
  </div>
}
