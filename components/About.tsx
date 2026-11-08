import SectionHeading from "@/components/SectionHeading";
import { getDictionary } from "@/lib/preferences";

export default function About() {
  const { about } = getDictionary();

  return (
    <section id="about" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading title={about.title} />

      <p data-reveal className="max-w-2xl text-lg leading-relaxed text-soft rtl:leading-loose">
        {about.body}
      </p>
    </section>
  );
}
