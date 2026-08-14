import type { ProjectArt as ArtKey } from "@/data/projects";

const LINE = "#23231e";
const CREAM = "#f3f1ea";
const MUTED = "#8e8c84";
const ACCENT = "#c8ff2e";

function Node({
  x,
  y,
  label,
  active,
}: {
  x: number;
  y: number;
  label: string;
  active?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="112"
        height="44"
        rx="4"
        fill={active ? "rgba(200,255,46,0.08)" : "none"}
        stroke={active ? ACCENT : LINE}
      />
      <text
        x={x + 56}
        y={y + 27}
        textAnchor="middle"
        fontSize="11"
        fontFamily="monospace"
        letterSpacing="1"
        fill={active ? ACCENT : MUTED}
      >
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g stroke={LINE}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x2 - 6} y1={y2 - 5} x2={x2} y2={y2} />
      <line x1={x2 - 6} y1={y2 + 5} x2={x2} y2={y2} />
    </g>
  );
}

const ART: Record<ArtKey, () => React.ReactElement> = {
  rag: () => (
    <svg viewBox="0 0 800 500" fill="none" role="img" aria-label="RAG pipeline diagram">
      <Node x={40} y={100} label="DOCS" />
      <Node x={228} y={100} label="CHUNKS" />
      <Node x={416} y={100} label="EMBED" />
      <Node x={604} y={100} label="VECTOR" active />
      <Node x={228} y={320} label="RETRIEVE" />
      <Node x={416} y={320} label="LLM" active />
      <Node x={604} y={320} label="ANSWER" />
      <Arrow x1={152} y1={122} x2={228} y2={122} />
      <Arrow x1={340} y1={122} x2={416} y2={122} />
      <Arrow x1={528} y1={122} x2={604} y2={122} />
      <Arrow x1={660} y1={144} x2={660} y2={296} />
      <Arrow x1={340} y1={298} x2={416} y2={298} />
      <Arrow x1={528} y1={342} x2={604} y2={342} />
      <g stroke={ACCENT} strokeDasharray="3 5">
        <line x1={604} y1={166} x2={604} y2={296} />
      </g>
      <text x={40} y={420} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        RETRIEVAL-AUGMENTED GENERATION
      </text>
      <circle cx={470} cy={415} r={3} fill={ACCENT} />
      <text x={480} y={419} fontSize="10" fontFamily="monospace" fill={MUTED}>
        grounded in real documents
      </text>
    </svg>
  ),
  phronesis: () => (
    <svg viewBox="0 0 800 500" fill="none" role="img" aria-label="PhronesisML pipeline">
      {[
        ["ETL", 90, false],
        ["EDA", 160, false],
        ["FEATURES", 230, false],
        ["ENGINE", 300, true],
        ["TRAIN", 370, false],
        ["EXPLAIN", 440, true],
        ["REPORT", 510, false],
      ].map(([label, y, active], i) => (
        <g key={String(label)}>
          <rect
            x={240}
            y={Number(y)}
            width="200"
            height="44"
            rx="4"
            fill={active ? "rgba(200,255,46,0.08)" : "none"}
            stroke={active ? ACCENT : LINE}
          />
          <text
            x={340}
            y={Number(y) + 27}
            textAnchor="middle"
            fontSize="11"
            fontFamily="monospace"
            letterSpacing="1"
            fill={active ? ACCENT : MUTED}
          >
            {String(label)}
          </text>
          <text
            x={460}
            y={Number(y) + 27}
            fontSize="9"
            fontFamily="monospace"
            fill={MUTED}
          >
            {i < 6 ? "│" : ""}
          </text>
        </g>
      ))}
      <g stroke={LINE}>
        {[134, 204, 274, 344, 414, 484].map((y) => (
          <line key={y} x1={340} y1={y} x2={340} y2={y + 20} />
        ))}
      </g>
      <text x={240} y={50} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        WORKFLOWSTATE
      </text>
      <text x={480} y={560} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        LANGGRAPH AGENTS
      </text>
    </svg>
  ),
  probeiq: () => (
    <svg viewBox="0 0 800 500" fill="none" role="img" aria-label="ProbeIQ adaptive loop">
      <circle cx={400} cy={250} r={180} stroke={LINE} />
      <circle cx={400} cy={250} r={120} stroke={LINE} strokeDasharray="4 6" />
      <g>
        {[
          { x: 400, y: 40, l: "QUESTION" },
          { x: 590, y: 250, l: "ANSWER" },
          { x: 400, y: 460, l: "EVALUATE" },
          { x: 210, y: 250, l: "REASON" },
        ].map((n, i) => (
          <g key={n.l}>
            <circle
              cx={n.x}
              cy={n.y}
              r={44}
              fill={i === 2 ? "rgba(200,255,46,0.08)" : "none"}
              stroke={i === 2 ? ACCENT : LINE}
            />
            <text
              x={n.x}
              y={n.y + 4}
              textAnchor="middle"
              fontSize="10"
              fontFamily="monospace"
              letterSpacing="1"
              fill={i === 2 ? ACCENT : MUTED}
            >
              {n.l}
            </text>
          </g>
        ))}
      </g>
      <text x={400} y={245} textAnchor="middle" fontSize="10" fontFamily="monospace" fill={CREAM}>
        NEXT?
      </text>
      <text x={400} y={265} textAnchor="middle" fontSize="10" fontFamily="monospace" fill={ACCENT}>
        adapts
      </text>
      <text x={400} y={480} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        CLOSED-LOOP INTERVIEW
      </text>
    </svg>
  ),
  extractor: () => (
    <svg viewBox="0 0 800 500" fill="none" role="img" aria-label="Hospital website extraction">
      <rect x={60} y={80} width={260} height={340} rx={6} stroke={LINE} />
      <rect x={60} y={80} width={260} height={16} fill={LINE} />
      {[120, 150, 180, 210, 240, 270, 300, 330].map((y) => (
        <line key={y} x1={80} y1={y} x2={300} y2={y} stroke={LINE} />
      ))}
      <line x1={80} y1={110} x2={200} y2={110} stroke={ACCENT} />
      <g stroke={LINE}>
        <line x1={320} y1={250} x2={420} y2={250} />
        <line x1={414} y1={245} x2={420} y2={250} />
        <line x1={414} y1={255} x2={420} y2={250} />
      </g>
      <rect x={420} y={80} width={320} height={340} rx={6} stroke={LINE} />
      <text x={440} y={110} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        25-FIELD INTAKE
      </text>
      {Array.from({ length: 25 }).map((_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        return (
          <rect
            key={i}
            x={440 + col * 60}
            y={130 + row * 54}
            width={52}
            height={40}
            rx={3}
            fill={i === 0 ? "rgba(200,255,46,0.08)" : "none"}
            stroke={i === 0 ? ACCENT : LINE}
          />
        );
      })}
    </svg>
  ),
  message: () => (
    <svg viewBox="0 0 800 500" fill="none" role="img" aria-label="Message classification">
      {[
        { x: 60, y: 60, w: 260, h: 60 },
        { x: 60, y: 150, w: 220, h: 60 },
        { x: 60, y: 240, w: 300, h: 60 },
        { x: 60, y: 330, w: 240, h: 60 },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx={14}
          stroke={LINE}
          fill={i === 1 ? "rgba(200,255,46,0.08)" : "none"}
        />
      ))}
      {[90, 180, 270, 360].map((y) => (
        <line key={y} x1={80} y1={y + 22} x2={y === 180 ? 240 : 300} y2={y + 22} stroke={MUTED} opacity={0.5} />
      ))}
      {[
        { x: 560, y: 90, l: "TASK", a: true },
        { x: 560, y: 180, l: "EVENT", a: false },
        { x: 560, y: 270, l: "REMINDER", a: true },
        { x: 560, y: 360, l: "SPAM", a: false },
      ].map((t) => (
        <g key={t.l}>
          <rect
            x={t.x}
            y={t.y}
            width={130}
            height={34}
            rx={17}
            fill={t.a ? "rgba(200,255,46,0.1)" : "none"}
            stroke={t.a ? ACCENT : LINE}
          />
          <text
            x={t.x + 65}
            y={t.y + 22}
            textAnchor="middle"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1"
            fill={t.a ? ACCENT : MUTED}
          >
            {t.l}
          </text>
          <line x1={380} y1={t.y + 34} x2={560} y2={t.y + 17} stroke={LINE} strokeDasharray="3 4" />
        </g>
      ))}
      <text x={60} y={430} fontSize="10" fontFamily="monospace" letterSpacing="1" fill={MUTED}>
        900 MESSAGES · 6 CLASSES · MASKED FIRST
      </text>
    </svg>
  ),
};

export default function ProjectArt({ art, className }: { art: ArtKey; className?: string }) {
  const Comp = ART[art];
  return (
    <div className={className}>
      <Comp />
    </div>
  );
}
