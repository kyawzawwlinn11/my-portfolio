import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = "Kyaw Zaww Linn - Senior Full-Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#050812",
        color: "#f4f7fb",
        padding: 72,
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 18% 10%, rgba(56,213,255,0.28), transparent 360px), radial-gradient(circle at 88% 18%, rgba(167,139,250,0.22), transparent 340px)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 28, color: "#38d5ff" }}>~/kyawzaww/profile</div>
        <div style={{ fontSize: 24, color: "#aab6ca" }}>kyawzawwlinn.dev</div>
      </div>
      <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 18, fontSize: 40, color: "#38d5ff" }}>
          Senior Full-Stack Developer
        </div>
        <div
          style={{
            marginTop: 30,
            maxWidth: 900,
            fontSize: 28,
            lineHeight: 1.35,
            color: "#cbd5e1",
          }}
        >
          Building production web, backend, mobile, and CMS-powered systems for real
          product teams.
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: 18,
          color: "#f7b955",
          fontSize: 24,
        }}
      >
        <span>travel tech</span>
        <span>/</span>
        <span>fintech</span>
        <span>/</span>
        <span>creator platforms</span>
      </div>
    </div>,
    size,
  );
}
