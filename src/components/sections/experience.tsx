"use client";

import { useTranslations, useLocale } from "next-intl";
import { m } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap, BookOpen } from "lucide-react";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const trainings = [
  {
    nameKo: "한국인터넷진흥원(KISA) — K-Shield Jr. 기초과정 9차",
    nameEn: "KISA — K-Shield Jr. Basic Course (9th)",
    period: "2025.05. ~ 2025.06.",
    statusKo: "교육 이수",
    statusEn: "Training Participant",
  },
  {
    nameKo: "KnockOn — ELITE WHITE HACKER 3기",
    nameEn: "KnockOn — ELITE WHITE HACKER 3rd",
    period: "2024.11. ~ 2025.02.",
    statusKo: "과정 수료",
    statusEn: "Course Completed",
  },
  {
    nameKo: "글로벌숙련기술진흥원 — 예비숙련기술인 양성 심화",
    nameEn: "Global Skilled Technicians Promotion Agency — Advanced Skilled Worker Training",
    period: "2018.10. ~ 2018.11.",
    statusKo: "과정 수료",
    statusEn: "Course Completed",
  },
];

type TimelineItem =
  | { kind: "work"; isLeft: boolean; idx: number }
  | { kind: "edu"; isLeft: boolean; eduIdx: number; idx: number };

export function Experience() {
  const t = useTranslations("experience");
  const edu = useTranslations("education");
  const locale = useLocale();
  const isKo = locale === "ko";

  const timeline: TimelineItem[] = [
    { kind: "edu",  isLeft: false, eduIdx: 0, idx: 0 },
    { kind: "work", isLeft: true,  idx: 1 },
    { kind: "edu",  isLeft: false, eduIdx: 1, idx: 2 },
  ];

  return (
    <section id="experience" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("heading")}</SectionHeading>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {timeline.map((item) => {
            const { isLeft, idx } = item;
            return (
              <m.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={cn(
                  "relative mb-12 last:mb-0 pl-14 md:w-1/2 md:pl-0",
                  isLeft ? "md:ml-0 md:pr-12" : "md:ml-auto md:pl-12"
                )}
              >
                <div
                  className={cn(
                    "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-background",
                    isLeft ? "md:left-auto md:-right-4" : "md:-left-4"
                  )}
                >
                  {item.kind === "work"
                    ? <Briefcase className="h-3.5 w-3.5 text-accent" />
                    : <GraduationCap className="h-3.5 w-3.5 text-accent" />
                  }
                </div>

                {item.kind === "work" && (() => {
                  const exp = experiences[0];
                  return (
                    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md">
                      <h3 className="text-base font-semibold text-foreground">
                        {isKo ? exp.company : exp.companyEn}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {isKo ? exp.role : exp.roleEn}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {isKo ? exp.team : exp.teamEn}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {isKo ? exp.period : exp.periodEn}
                        </span>
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {(isKo ? exp.description : exp.descriptionEn).map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <Badge key={tag} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  );
                })()}

                {item.kind === "edu" && (() => {
                  const e = profile.education[item.eduIdx];
                  return (
                    <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-md">
                      <h3 className="text-base font-semibold text-foreground">
                        {isKo ? e.school : e.schoolEn}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-accent">
                        {isKo ? e.degree : e.degreeEn}
                      </p>
                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {isKo ? e.major : e.majorEn}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {e.date}
                        </span>
                      </div>
                      {e.club && (
                        <p className="mt-3 text-sm text-muted-foreground">
                          {isKo ? e.club : e.clubEn}
                        </p>
                      )}
                    </div>
                  );
                })()}
              </m.div>
            );
          })}
        </div>

        <m.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 mt-16 text-lg font-semibold text-foreground"
        >
          {edu("training")}
        </m.h3>
        <div className="space-y-4">
          {trainings.map((tr, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {isKo ? tr.nameKo : tr.nameEn}
                  </h3>
                  <span className="whitespace-nowrap text-sm text-muted-foreground">
                    {tr.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {isKo ? tr.statusKo : tr.statusEn}
                </p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
