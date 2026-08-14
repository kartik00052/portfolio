export default function HeroText() {
  return (
    <div className="hero-name">
      <span className="line-mask">
        <span data-hero="line1" className="display-xl font-display text-foreground">
          KARTIK
        </span>
      </span>
      <span className="line-mask">
        <span
          data-hero="line2"
          className="display-xl font-display text-foreground"
        >
          SHARMA<span className="text-accent">_</span>
        </span>
      </span>
      <div className="mt-6 md:mt-10 md:pl-[14vw]">
        <span className="line-mask">
          <span
            data-hero="line3"
            className="display-md font-display text-muted"
          >
            AI/ML ENGINEER<span className="text-accent">.</span>
          </span>
        </span>
      </div>
    </div>
  );
}
