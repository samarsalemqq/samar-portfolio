import { User } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

// Deliberately just one paragraph — this is a portfolio, not a resume.
// No stats, no timeline, no card grid. Let the projects do the talking.
export default function About() {
  return (
    <section id="about" className="container-site py-7 sm:py-9 lg:py-12">
      <SectionHeading eyebrow="About" title="A little about me" icon={User} />

      <p className="max-w-2xl animate-fade-up text-balance text-xl leading-relaxed text-gray-300 sm:text-2xl">
        I&apos;m an Information Technology graduate and software engineer who
        likes turning ideas into products that feel obvious in hindsight —
        from iOS apps built at the Apple Developer Academy to React Native
        apps used every day. I care as much about how something feels to use
        as how it&apos;s built underneath.
      </p>
    </section>
  );
}
