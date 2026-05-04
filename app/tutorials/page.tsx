import { BigLink, Section } from "../components/TutorialComponents";
import { TUTORIAL_ROUTES } from "./routes";

export default function Tutorials() {
  return <div className="py-15">
    <Section heading="Tutorials">
      <p className="leading-tight">These are all of our guides for common workflows on Apple devices.</p>
    </Section>
    <div className="flex flex-col gap-2 mt-8">
      {TUTORIAL_ROUTES.map(({ title, description, slug }) => (
        <BigLink key={slug} href={`/tutorials/${slug}`} title={title} description={description} />
      ))}
    </div>
  </div>
}