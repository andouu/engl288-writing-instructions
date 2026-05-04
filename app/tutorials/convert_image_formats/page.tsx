import Link from "next/link"
import { BigLink, Icon, ImageShowcase, Section } from "../../components/TutorialComponents"

export default function ConvertImageFormats() {
  return <div className="py-15 pb-45">
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
      <Section heading="Open in Preview">
        <p>Next, double-click the desired image. The Preview app <Icon src="/preview.png" alt="Preview App Icon" /> will open a window previewing the image. Using the example given above, opening cat.jpg will open a window like this:</p>
        <ImageShowcase
          src="/open_in_preview.png"
          alt="Image showing an example of image files in Preview"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Example Preview window showing one image, cat.jpg"
        />
      </Section>
      <Section heading="Export in Preview">
        <p>In the menu bar, click "File", then "Export".</p>
        <ImageShowcase
          src="/export_in_preview.png"
          alt="Image showing where the export button is in the Preview app"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Pressing the export button in the Preview app"
        />
        <p>A popup will open with options to name the newly exported file, where to save the exported file, and what format to export the image file as.</p>
        <ImageShowcase
          src="/popup_in_preview.png"
          alt="Image showing the export menu in the Preview app"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Export options in Preview"
        />
        <p>For example, to export cat.jpg as cat.png in the "My Images" folder, you select the following options:</p>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1"><b className="font-medium">Export As:</b> cat.png</li>
          <li className="pl-1"><b className="font-medium">Where:</b> My Images</li>
          <li className="pl-1"><b className="font-medium">Format:</b> PNG</li>
        </ul>
        <p>Press the blue "save" button to finalize exporting the image file. A new file will appear in Finder like so:</p>
        <ImageShowcase
          src="/exported_in_finder.png"
          alt="Image showing the exported images in the Finder app"
          width={3248}
          height={2112}
          sizes="(max-width: 1024px) 100vw, 1024px"
          caption="Exported image in Finder"
        />
      </Section>
      <Section heading="Conclusion">
        <p>Good job, you&apos;ve successfully exported your file in a different format!</p>
        <div className="mt-8">
          <Link href="/tutorials" className="w-fit rounded-full border border-neutral-200 px-5 py-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
            &lt;- All Tutorials
          </Link>
        </div>
      </Section>
    </div>
  </div>
}