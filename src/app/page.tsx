import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionDivider from "@/components/SectionDivider";
import SectionWrapper from "@/components/SectionWrapper";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 min-h-[5000px]">
      <SectionWrapper name="Home">
        <Hero />
      </SectionWrapper>
      <SectionDivider />
      <SectionWrapper name="About">
        <About />
      </SectionWrapper>
      <SectionWrapper name="Projects" threshold={0.75}>
        <Projects />
      </SectionWrapper>
      <SectionWrapper name="Skills">
        <Skills />
      </SectionWrapper>
    </main>
  );
}
