import { ImageResponse } from "next/og";
import { PROFILE } from "@/data/social";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = `${PROFILE.name} — ${PROFILE.title}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0a",
          color: "#f3f1ea",
          padding: 64,
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#c8ff2e",
            }}
          />
          <span style={{ fontSize: 22, letterSpacing: "0.2em", color: "#8e8c84" }}>
            {PROFILE.title.toUpperCase()} · ML BACKEND · LLM & RAG
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: "-0.03em",
          }}
        >
          {PROFILE.name}
          <br />
          <span style={{ color: "#8e8c84" }}>builds systems that</span>
          <br />
          <span style={{ color: "#c8ff2e" }}>turn data into intelligence.</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#8e8c84" }}>
          <span>Kartik Sharma</span>
          <span>github.com/kartik00052 ↗</span>
        </div>
      </div>
    ),
    size
  );
}
