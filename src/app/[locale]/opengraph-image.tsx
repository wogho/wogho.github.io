import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.author.name.en} — ${siteConfig.author.title.en}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Accent gradient orb */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "120px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            border: "1px solid rgba(148,163,184,0.3)",
            borderRadius: "24px",
            padding: "8px 20px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#0ea5e9",
            }}
          />
          <span style={{ color: "#94a3b8", fontSize: "18px" }}>Portfolio</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 700,
            background: "linear-gradient(90deg, #f1f5f9 0%, #0ea5e9 100%)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "12px",
            letterSpacing: "-1px",
          }}
        >
          {siteConfig.author.name.en}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "28px",
            color: "#0ea5e9",
            marginBottom: "32px",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.author.title.en}
        </div>

        {/* Keywords */}
        <div style={{ display: "flex", gap: "12px" }}>
          {siteConfig.seo.keywords.map(
            (keyword) => (
              <div
                key={keyword}
                style={{
                  background: "rgba(14,165,233,0.1)",
                  border: "1px solid rgba(14,165,233,0.25)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "#7dd3fc",
                  fontSize: "16px",
                }}
              >
                {keyword}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
