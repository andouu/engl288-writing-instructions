import Link from "next/link";
import { Section } from "../components/TutorialComponents";

export default function About() {
  return <div className="py-15">
    <Section heading="About">
      <p>This website was created by Andrew Zhou for Engl 288. The code is open-sourced and can be found at this <Link href="https://github.com/andouu/engl288-writing-instructions" target="_blank" className="underline">GitHub repo</Link>.</p>
    </Section>
  </div>
}