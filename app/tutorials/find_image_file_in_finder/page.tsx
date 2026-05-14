import { BigLink, Divider, Icon, ImageShowcase, Note, Section } from "@/app/components/TutorialComponents";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";

export default function FindImageFileInFinder() {
  return <div className="py-15">
    <h1 className="text-4xl tracking-tight font-semibold text-neutral-900">How to find my image file in Finder</h1>
    <p className="text-neutral-500 mt-5 text-lg">
      Learn how to use Finder to browse your Mac&apos;s folders and locate the saved image file you want to open, move, or edit.
    </p>
    <div className="mt-12 flex flex-col gap-10 w-full">
      <Section heading="Prerequisite Information">
        <p className="">
          {"This guide is intended for users of"} <Link className="hover:underline" href="https://www.apple.com/mac/" target="_blank">MacOS devices</Link> <GoLinkExternal className="inline mb-1 stroke-1 opacity-50" />{". If this doesn't apply to you or this isn't the information you're looking for, the resources below may be helpful:"}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          <BigLink href="/" title="How to find your device's MacOS version" description="Learn how to find out what version of MacOS your device is running" />
          <BigLink href="/" title="How to convert image file formats in MacOS" description="Learn how to use Finder and Preview on MacOS to convert image files from one format to another" />
          <BigLink href="/" title="What is an image file format?" description="Learn the differences between image file formats like .jpg and .png" />
        </ul>
      </Section>
      <Section heading="Before Starting">
        <p>Finder is an app built into MacOS you can use to manage files. It looks like this:</p>
        <ImageShowcase src="/finder.png" alt="Finder App Icon" width={75} height={75} caption="Finder App Icon" />
        <p>We&apos;ll use it to find your images in this tutorial. You can open it using the following ways:</p>
        <ul className="mt-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Click the Finder icon in the Dock</li>
          <li className="pl-1">Open Spotlight (⌘ + Space), type &quot;Finder&quot;, then press Return.</li>
        </ul>
        <h3 className="text-lg tracking-tight mt-8 mb-2 font-medium">Quick Help</h3>
        <p>{"If these scenarios apply to you, you can jump to the method that's most applicable to you:"}</p>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">I need to find a screenshot I just took: <Link href="#method-2" className="underline hover:opacity-50">Method 2</Link></li>
          <li className="pl-1">I need to find an image I just recently downloaded or saved: <Link href="#method-3" className="underline hover:opacity-50">Method 3</Link></li>
        </ul>
      </Section>
      <Section id="method-1" heading="Method 1: General Search">
        <p>In Finder <Icon src="/finder.png" alt="Finder Icon" />, press ⌘ + F.</p>
        <Note heading="Quick Tip">
          If you know the name of your file, instead of pressing ⌘ + F, click the search bar in the top right of Finder and type in the name of your image file (e.g. "cat") and then press return.
        </Note>
        <ImageShowcase
          src="/finder_find_menu.png"
          alt="Image showing what the finder search menu looks like"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="After pressing ⌘ + F"
        />
        <p>Next to "Kind", select "Image" from the dropdown and then select the file type of the image you are looking for, like PNG. Mac will search your device for all saved PNG images.</p>
        <ImageShowcase
          src="/finder_png_search.png"
          alt="Image showing a search for PNGs"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Search result for PNGs"
        />
        <p>{"In most cases, searching your entire device is overkill. The following methods can help you quickly locate files in common scenarios."}</p>
      </Section>
      <Section id="method-2" heading="Method 2: Find Recently Downloaded or Saved Images">
        <p>{"By default, Mac saves your files (including images) to the last folder that you saved a file to. For example, if you saved an image to Documents, a good first place to look is the Documents folder for your image."}</p>
        <br />
        <p>{"If you don't remember where you last saved a file, Mac often defaults to the Downloads folder, which you can find in the left sidebar of Finder."}</p>
        <ImageShowcase
          src="/finder_downloads.png"
          alt="Image showing the Downloads folder open in Finder"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Example Downloads folder in Finder"
        />
        <Note heading="Quick Tip">The recents folder is also a good place to look for all recently saved files.</Note>
        <p>This behavior can change slightly for screenshots and screen recordings, which is addressed in the next method.</p>
      </Section>
      <Section id="method-3" heading="Method 3: Find Screenshots and Screen Recordings">
        <p>By default, screenshots will be saved to the Desktop folder in Finder, which is a good first place to look.</p>
        <ImageShowcase
          src="/finder_screenshots.png"
          alt="Image showing the Desktop folder open in Finder with screenshots"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Example Desktop folder in Finder with screenshots"
        />
        <p>{"If you've modified your screenshot options, your screenshots might not appear in the Desktop folder. See your options by:"}</p>
        <ol className="my-4 list-decimal list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Press ⌘ + Space + 5. An action bar will appear at the bottom of your screen.</li>
          <li className="pl-1">Click on the "Options" Dropdown. A menu will appear.</li>
          <li className="pl-1">Under the "Save to" section, the option that is selected is where your screenshots are saved to.</li>
        </ol>
        <Note heading="Important Note">
          The options for screenshots are distinct from the ones for screen recordings. Make sure you are looking at the correct options for your usecase.
        </Note>
      </Section>
      <Section heading="Conclusion">
        <p>Congrats, you&apos;ve learned how to find image files in Finder!</p>
        <div className="mt-8">
          <Link href="/tutorials" className="w-fit rounded-full border border-neutral-200 px-5 py-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
            &lt;- All Tutorials
          </Link>
        </div>
      </Section>
    </div>
  </div>
}
