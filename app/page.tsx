import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

// Homepage: every section is a self-contained, reusable component.
// This is a portfolio, not a CV — kept deliberately short: Hero, Selected
// Work, About, Skills, Contact. Experience.tsx, Education.tsx and
// ProfessionalPrograms.tsx still exist in components/ if you ever want to
// bring a timeline back, they're just not rendered here.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
