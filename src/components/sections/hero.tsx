"use client";

import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
    { value: t("stat4_value"), label: t("stat4_label") },
  ];

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-12 pt-24 sm:px-10 lg:px-20"
    >
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] will-change-transform"
          style={{ animation: "float-orb-1 20s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-secondary/8 blur-[100px] will-change-transform"
          style={{ animation: "float-orb-2 25s ease-in-out infinite" }}
        />
        <div
          className="absolute right-1/3 top-1/5 h-[300px] w-[300px] rounded-full bg-accent/6 blur-[80px] will-change-transform"
          style={{ animation: "float-orb-3 18s ease-in-out infinite" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center">

        {/* ── Name ── */}
        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 text-6xl font-bold leading-none tracking-tight md:text-8xl"
        >
          {t("name")}
        </m.h1>

        {/* ── Title ── */}
        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mb-6 font-mono text-base text-accent sm:text-lg"
        >
          Security Infrastructure Engineer
        </m.p>

        {/* ── Subtitle ── */}
        <m.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="max-w-2xl whitespace-pre-line text-xl leading-relaxed text-muted-foreground"
        >
          {t("subtitle")}
        </m.p>

        {/* ── CTA Buttons ── */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={`/${locale}/career/`}
            className="w-36 rounded-lg border border-border bg-card px-8 py-3 text-center text-base font-medium text-foreground transition-all hover:scale-[1.02] hover:border-accent/40 hover:bg-accent/5"
          >
            {t("cta_resume")}
          </a>
          <a
            href="#contact"
            className="w-36 rounded-lg bg-accent px-8 py-3 text-center text-base font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-[1.02] hover:bg-accent/90"
          >
            {t("cta_contact")}
          </a>
        </m.div>
      </div>

      {/* Stats grid */}
      <m.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.8 }}
        className="relative z-10 mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-muted/30 p-6 transition-colors hover:border-accent"
          >
            <div className="mb-2 text-3xl font-bold text-accent">
              {stat.value}
            </div>
            <div className="font-mono text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </m.div>
    </section>
  );
}
