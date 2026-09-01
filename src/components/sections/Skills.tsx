"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/data/skills";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/animations/Reveal";

export default function Skills() {
  const [active, setActive] = useState(SKILL_CATEGORIES[0].id);
  const category =
    SKILL_CATEGORIES.find((c) => c.id === active) ?? SKILL_CATEGORIES[0];

  return (
    <section
      id="skills"
      className="border-t border-border px-4 py-16 sm:px-5 sm:py-20 md:px-10 md:py-40"
      data-nav-section
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <SectionLabel index="02" label="Technical Capabilities" className="mb-16" />
        </Reveal>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col justify-center">
            {SKILL_CATEGORIES.map((cat, i) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActive(cat.id)}
                  onFocus={() => setActive(cat.id)}
                  onClick={() => setActive(cat.id)}
                  className="group flex items-center gap-4 sm:gap-6 border-b border-border py-3 text-left sm:py-4 md:py-5"
                  aria-pressed={isActive}
                >
                  <span className="label w-10 shrink-0 text-muted">
                    0{i + 1}
                  </span>
                  <span
                    className={`font-display display-md transition-all duration-500 ${
                      isActive ? "text-foreground" : "text-muted/60"
                    }`}
                  >
                    {cat.label}
                  </span>
                  <span
                    className={`ml-auto h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive ? "scale-100 bg-accent" : "scale-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full border-l border-accent pl-6 md:pl-10"
              >
                <p className="label mb-6 text-accent">{category.label}</p>
                <p className="mb-10 max-w-md text-base leading-relaxed text-muted">
                  {category.blurb}
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group relative border border-border px-4 py-2 transition-colors duration-300 hover:border-accent"
                      title={skill.detail}
                    >
                      <span className="text-sm text-foreground/90 group-hover:text-accent">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="label mt-6 hidden max-w-xs text-muted/70 md:block">
                  {category.skills[0]?.detail}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
