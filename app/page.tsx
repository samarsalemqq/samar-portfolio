import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import MotionDirector from "@/components/MotionDirector";

// Runs before the sections paint, so content waiting to reveal on scroll
// never flashes in first. If the motion script never loads, it comes back.
const motionBoot = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches){var r=document.documentElement;r.dataset.motion='on';setTimeout(function(){if(!r.dataset.motionReady)delete r.dataset.motion},4000)}}catch(e){}`;

// Homepage: every section is a self-contained, reusable component.
// Education.tsx and ProfessionalPrograms.tsx still exist in components/
// if you ever want to render them too.
export default function HomePage() {
  return (
    <div className="motion-page overflow-x-clip">
      <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      <MotionDirector />
      <Hero />
      <Projects />
      <Experience />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
