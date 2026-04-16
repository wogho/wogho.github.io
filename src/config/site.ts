export const siteConfig = {
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",
  author: {
    name: { ko: "김재호", en: "Jaeho Kim" },
    title: { ko: "Security Infrastructure Engineer", en: "Security Infrastructure Engineer" },
    email: "dnldp55@naver.com",
  },
  social: {
    github: "https://github.com/wogho",
    linkedin: "https://www.linkedin.com/in/jaeho-kim-2b70b1232/",
    blog: "https://noong2.tistory.com/",
  },
  nav: [
    "about",
    "education",
    "experience",
    "career-highlights",
    "certified",
    "contact",
  ] as const,
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: false,
    certified: true,
    projects: false,
    contact: true,
  },
  seo: {
    titleTemplate: "%s | Jaeho Kim",
    defaultTitle: "Jaeho Kim | Security Infrastructure Engineer",
    description:
      "안정적인 보안 인프라 환경 구축에 관심을 갖고 있는 학생입니다.",
    keywords: ["portfolio", "security", "infrastructure", "engineer"],
  },
  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];
