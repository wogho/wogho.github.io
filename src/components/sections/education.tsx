"use client";

import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
  const t = useTranslations("education");
  const locale = useLocale();
  const isKo = locale === "ko";

  return (
    <section id="education" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="space-y-4">
          {profile.education.map((edu, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {isKo ? edu.school : edu.schoolEn}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {edu.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isKo ? edu.major : edu.majorEn}
                  <span className="mx-1.5 text-border">·</span>
                  {isKo ? edu.degree : edu.degreeEn}
                </p>
                {edu.club && (
                  <p className="mt-1 text-xs text-muted-foreground/70">
                    {isKo ? edu.club : edu.clubEn}
                  </p>
                )}
              </div>
            </m.div>
          ))}
        </div>

        {/* Training */}
        <m.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 mt-12 text-lg font-semibold text-foreground"
        >
          {t("training")}
        </m.h3>

        <div className="space-y-4">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {isKo
                  ? "한국인터넷진흥원(KISA) — K-Shield Jr. 기초과정 9차"
                  : "KISA — K-Shield Jr. Basic Course (9th)"}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                2025.05. ~ 2025.06.
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {isKo ? "교육 이수" : "Training Participant"}
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {isKo
                  ? "KnockOn — ELITE WHITE HACKER 3기"
                  : "KnockOn — ELITE WHITE HACKER 3rd"}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                2024.11. ~ 2025.02.
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {isKo ? "과정 수료" : "Course Completed"}
            </p>
          </div>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-base font-semibold text-foreground">
                {isKo
                  ? "글로벌숙련기술진흥원 — 예비숙련기술인 양성 심화"
                  : "Global Skilled Technicians Promotion Agency — Advanced Skilled Worker Training"}
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                2018.10. ~ 2018.11.
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {isKo ? "과정 수료" : "Course Completed"}
            </p>
          </div>
        </m.div>
        </div>
      </div>
    </section>
  );
}
