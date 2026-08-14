import Hero from "@/components/hero/Hero";
import Intro from "@/components/sections/Intro";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import Skills from "@/components/sections/Skills";
import GithubActivity from "@/components/sections/GithubActivity";
import ResearchSection from "@/components/sections/ResearchSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "AI / ML ENGINEERING",
          "RAG",
          "AGENTIC AI",
          "ML BACKEND",
          "OPEN SOURCE",
          "LLM SYSTEMS",
        ]}
        className="border-b border-border"
      />
      <Intro />
      <ProjectShowcase />
      <Skills />
      <GithubActivity />
      <ResearchSection />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
