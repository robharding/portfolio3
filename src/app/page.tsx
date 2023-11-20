import About from "@/components/About";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import SectionWrapper from "@/components/SectionWrapper";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 min-h-[5000px]">
      <SectionWrapper name="Home" threshold={1}>
        <Hero />
      </SectionWrapper>
      <SectionDivider />
      <SectionWrapper name="About" threshold={1}>
        <About />
      </SectionWrapper>
      <SectionWrapper name="Projects">
        <Projects />
      </SectionWrapper>
      <SectionWrapper name="Skills">
        <Skills />
      </SectionWrapper>
      <SectionWrapper name="Experience">
        <Experience />
      </SectionWrapper>
    </main>
  );
}
