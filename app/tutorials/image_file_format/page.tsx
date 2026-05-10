import { BigLink, Icon, ImageShowcase, Note, Section } from "@/app/components/TutorialComponents";
import Link from "next/link";

export default function ImageFileFormat() {
  return <div className="py-15">
    <h1 className="text-4xl tracking-tight font-semibold text-neutral-900">What is an image file format?</h1>
    <p className="text-neutral-500 mt-5 text-lg">
      Learn what image file formats are, why common formats like JPG and PNG behave differently, and how those differences affect sharing or editing images.
    </p>
    <div className="mt-12 flex flex-col gap-10 w-full">
      <Section heading="Prerequisite Information">
        <p className="">
          {"This resource is intended for users who handle many different types of image files, or are interested in their differences. It does not explain how to save images, convert between different image file formats, or how to find your images on your device. If this information doesn't apply to you or isn't the information you're looking for, the resources below may be helpful:"}
        </p>
        <ul className="mt-4 flex flex-col gap-2">
          <BigLink href="/" title="How to find my image file in Finder" description="Learn how to locate your saved image file in Finder, MacOS's file management app" />
          <BigLink href="/" title="How to convert image file formats in MacOS" description="Learn how to use Finder and Preview on MacOS to convert image files from one format to another" />
        </ul>
      </Section>
      <Section heading="Overview">
        <p>{"Image files are digital files on your device that store visual data like photos, drawings, or graphics. At a high level, different file formats determine how the data is stored and affects how the data is compressed and displayed."}</p>
        <br />
        <p>{"While there are many different types of image file formats, this guide will go over the formats you've probably seen the most often:"}</p>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">PNG (.png)</li>
          <li className="pl-1">JPG/JPEG (.jpg/.jpeg)</li>
          <li className="pl-1">HEIC (.heic)</li>
        </ul>
        <p>{"Although images in these formats may look similar (and in many cases visually indiscernable), they have crucial differences for those that interact with image files frequently."}</p>
      </Section>
      <Section heading="PNG">
        <p>{"PNG image files end in .png (e.g. \"cat.png\", \"dog.png\"). It's a lossless format and allows for transparent images, so it's commonly used in graphics, screenshots, or any usecase that requires high fidelity images."}</p>
        <Note heading="What does lossless mean?">
          {"Lossless image formats keeps all original image data, even when compressed. That means if you save the image and open it somewhere else, you won't notice a difference even after 100 saves. This isn't necessarily the case with a format like JPG."}
        </Note>
        <h3 className="font-medium">Pros</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Lossless</li>
          <li className="pl-1">Maintains sharp edges</li>
          <li className="pl-1">Widely supported</li>
        </ul>
        <h3 className="font-medium">Cons</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Larger file sizes compared to lossy formats like JPG</li>
          <li className="pl-1">Not the best for photographs (inefficient with file size)</li>
          <li className="pl-1">Compression heavily depends on usecase</li>
        </ul>
      </Section>
      <Section heading="JPG">
        <p>{"JPG image files end in .jpg or .jpeg (e.g. \"cat.jpg\", \"dog.jpeg\"). It's a lossy format but retains visual similarity for realistic images, so it's commonly used for photos, social media posts, or any usecase that doesn't need quality and prefers smaller file sizes."}</p>
        <Note heading="What does lossy mean?">
          {"Lossy image formats remove some image data to make files smaller during compression. That means if you save an image many times, the quality will decrease over time."}
        </Note>
        <h3 className="font-medium">Pros</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Much smaller file sizes compared to lossless formats like PNG</li>
          <li className="pl-1">Fast and easy to display digitally</li>
          <li className="pl-1">Widely supported</li>
        </ul>
        <h3 className="font-medium">Cons</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Lossy</li>
          <li className="pl-1">{"Doesn't preserve sharp edges, so not good for graphics"}</li>
          <li className="pl-1">No transparency support</li>
        </ul>
      </Section>
      <Section heading="HEIC">
        <p>{"HEIC image files end in .heic (e.g. \"cat.heic\", \"dog.heic\"). It supports both lossy and lossless compression modes, and achieves better image quality compared to JPG."}</p>
        <Note heading="Note about using HEIC">
          HEIC was designed by Apple for storing phone photos, and is primarily used on Apple devices. Support for displaying HEIC images is not as universal as other formats like PNG and JPG.
        </Note>
        <h3 className="font-medium">Pros</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Better quality than JPG at the same file size</li>
          <li className="pl-1">Much smaller file size than JPG at the same quality</li>
          <li className="pl-1">Supports modern image features like HDR, Live Photos, depth maps, etc.</li>
        </ul>
        <h3 className="font-medium">Cons</h3>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1">Lossy</li>
          <li className="pl-1">{"Doesn't preserve sharp edges, so not good for graphics"}</li>
          <li className="pl-1">No transparency support</li>
        </ul>
      </Section>
      <Section heading="Conclusion">
        <p>As a general rule of thumb, use:</p>
        <ul className="my-4 list-disc list-outside pl-6 space-y-2 text-neutral-800">
          <li className="pl-1"><b className="font-medium">PNG</b> for transparent images, graphics, images that contain text</li>
          <li className="pl-1"><b className="font-medium">JPG</b> {"for photos and generally anything that doesn't need high fidelity"}</li>
          <li className="pl-1"><b className="font-medium">HEIC</b> {"for all JPG usecases and when you want to stay within the Apple ecosystem (e.g. storing images on your device)"}</li>
        </ul>
        <div className="mt-8">
          <Link href="/tutorials" className="w-fit rounded-full border border-neutral-200 px-5 py-2 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors duration-150">
            &lt;- All Tutorials
          </Link>
        </div>
      </Section>
    </div>
  </div>
}
