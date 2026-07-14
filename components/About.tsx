import { User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading eyebrow="About" title="A little about me" icon={User} />

  <p className="max-w-2xl animate-fade-up text-balance text-xl leading-relaxed text-gray-300 sm:text-2xl">
  I&apos;m an Information Technology graduate and Software Engineer passionate
  about building thoughtful digital products that solve real-world problems.
  My experience spans mobile application development, UI/UX design, and API
  integration, with hands-on experience building both native iOS and
  cross-platform applications. I enjoy continuously learning new technologies,
  exploring cloud computing and AI, and creating software that is reliable,
  intuitive, and built with users in mind.
</p>
    </section>
  );
}
