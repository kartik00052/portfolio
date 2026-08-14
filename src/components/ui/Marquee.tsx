import { Fragment } from "react";

type MarqueeProps = {
  items: string[];
  className?: string;
  reverse?: boolean;
  slow?: boolean;
};

export default function Marquee({
  items,
  className,
  reverse,
  slow,
}: MarqueeProps) {
  const row = [...items, ...items];
  return (
    <div
      className={`marquee-paused overflow-hidden whitespace-nowrap ${className ?? ""}`}
      aria-hidden="true"
    >
      <div
        className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: slow ? "48s" : "32s" }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <Fragment key={`${half}-${i}`}>
                <span className="font-display text-[10vw] leading-none font-semibold uppercase tracking-tight text-muted md:text-[7vw]">
                  {item}
                </span>
                <span className="mx-[3vw] inline-block h-[1.2vw] w-[1.2vw] rounded-full bg-accent" />
              </Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
