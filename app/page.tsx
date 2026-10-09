import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// Homepage: every section is a self-contained, reusable component.
// Education.tsx and ProfessionalPrograms.tsx still exist in components/
// if you ever want to render them too.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </>
  );
}