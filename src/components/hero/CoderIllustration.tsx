export default function CoderIllustration() {
  return (
    <svg
      viewBox="0 0 640 520"
      className="h-auto w-full"
      role="img"
      aria-label="Illustration of a developer building AI systems at a laptop"
    >
      {/* floating tech chips */}
      <g className="coder-chip" style={{ animationDelay: "-1s" }}>
        <rect x="34" y="64" width="92" height="34" rx="17" fill="#2e54fe" />
        <text x="80" y="86" textAnchor="middle" fill="#faf6ef" fontSize="13" fontWeight="600" fontFamily="Sora, sans-serif">
          RAG
        </text>
      </g>
      <g className="coder-chip" style={{ animationDelay: "-3s" }}>
        <rect x="522" y="40" width="92" height="34" rx="17" fill="#f99e76" />
        <text x="568" y="62" textAnchor="middle" fill="#2b2825" fontSize="13" fontWeight="600" fontFamily="Sora, sans-serif">
          LLM
        </text>
      </g>
      <g className="coder-chip" style={{ animationDelay: "-5s" }}>
        <rect x="556" y="196" width="76" height="30" rx="15" fill="#2b2825" />
        <text x="594" y="215" textAnchor="middle" fill="#faf6ef" fontSize="12" fontWeight="600" fontFamily="Sora, sans-serif">
          AGENTS
        </text>
      </g>
      <g className="coder-chip" style={{ animationDelay: "-2s" }}>
        <rect x="22" y="250" width="96" height="30" rx="15" fill="#ffbc95" />
        <text x="70" y="269" textAnchor="middle" fill="#2b2825" fontSize="12" fontWeight="600" fontFamily="Sora, sans-serif">
          FASTAPI
        </text>
      </g>

      {/* decorative plus + dots */}
      <g fill="#96908c">
        <circle cx="588" cy="330" r="3" />
        <circle cx="60" cy="420" r="3" />
        <circle cx="580" cy="470" r="3" />
      </g>
      <path d="M 200 60 h 26 M 213 47 v 26" stroke="#2e54fe" strokeWidth="3" strokeLinecap="round" />

      {/* desk scene card */}
      <g transform="rotate(-1.5 320 260)">
        <rect x="70" y="92" width="500" height="360" rx="40" fill="#f4f4f4" />
        <rect x="70" y="92" width="500" height="360" rx="40" fill="none" stroke="#dcd6cd" strokeWidth="2" />

        {/* window + plant */}
        <rect x="110" y="128" width="120" height="84" rx="14" fill="#e8e9ef" />
        <rect x="118" y="136" width="52" height="68" rx="8" fill="#faf6ef" />
        <rect x="176" y="136" width="44" height="68" rx="8" fill="#dcd6cd" />
        <path d="M 340 128 c -10 -22 -26 -26 -26 -26 c 10 -14 30 -16 30 -16 c 4 14 2 24 2 24 c 14 -2 22 -12 22 -12 c 8 12 2 24 2 24 c 8 6 10 12 10 12 z" fill="#2e54fe" />
        <rect x="332" y="150" width="4" height="34" rx="2" fill="#96908c" />

        {/* lamp */}
        <rect x="452" y="170" width="6" height="130" rx="3" fill="#2b2825" />
        <path d="M 398 150 h 114 l -12 22 h -92 z" fill="#ffbc95" />
        <circle cx="455" cy="300" r="22" fill="#fff7ec" />

        {/* person silhouette */}
        <circle cx="276" cy="212" r="26" fill="#2b2825" />
        <path d="M 232 356 c 0 -52 20 -82 44 -82 c 24 0 44 30 44 82 z" fill="#2b2825" />
        <rect x="208" y="336" width="136" height="12" rx="6" fill="#2b2825" />

        {/* desk */}
        <rect x="120" y="352" width="420" height="16" rx="8" fill="#2b2825" />
        <rect x="140" y="368" width="8" height="52" rx="4" fill="#96908c" />
        <rect x="516" y="368" width="8" height="52" rx="4" fill="#96908c" />

        {/* coffee mug */}
        <rect x="140" y="376" width="22" height="24" rx="6" fill="#f99e76" />
        <path d="M 162 384 h 8 a 6 6 0 0 1 0 12 h -8" stroke="#f99e76" strokeWidth="4" fill="none" />

        {/* laptop screen */}
        <rect x="370" y="238" width="156" height="104" rx="12" fill="#2b2825" />
        <rect x="378" y="246" width="140" height="88" rx="6" fill="#14120f" />

        {/* code lines */}
        <rect x="390" y="262" width="52" height="6" rx="3" fill="#2e54fe" />
        <rect x="390" y="278" width="88" height="6" rx="3" fill="#faf6ef" />
        <rect className="coder-type" style={{ "--l": "72px" } as React.CSSProperties} x="390" y="294" width="52" height="6" rx="3" fill="#f99e76" />
        <rect x="402" y="310" width="64" height="6" rx="3" fill="#96908c" />
        <rect className="coder-blink" x="474" y="306" width="6" height="14" rx="2" fill="#faf6ef" />

        {/* laptop base */}
        <rect x="382" y="342" width="132" height="10" rx="5" fill="#2b2825" />
        <path d="M 382 342 h 132 l -10 8 h -112 z" fill="#2b2825" />
      </g>
    </svg>
  );
}
