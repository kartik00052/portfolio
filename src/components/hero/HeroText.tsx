export default function HeroText() {
  return (
    <div className="hero-name">
      <span className="line-mask">
        <span data-hero="line1" className="font-display display-xl text-foreground">
          AI / ML
        </span>
      </span>
      <span className="line-mask">
        <span
          data-hero="line2"
          className="font-display display-xl text-outline-grey"
        >
          ENGINEER<span className="text-accent">.</span>
        </span>
      </span>
      <div className="mt-6 md:mt-8">
        <span className="line-mask">
          <span
            data-hero="line3"
            className="font-display display-sm max-w-md text-foreground/75 md:pl-[10vw]"
          >
            LLM &amp; RAG systems · ML backends · agentic infrastructure.
          </span>
        </span>
      </div>
    </div>
  );
}
