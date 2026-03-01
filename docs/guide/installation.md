# Awesome Portfolio Template — Installation & Customization Guide

> **For AI Agents**: This document contains all the information needed to clone, configure, and deploy this portfolio template. Follow each step sequentially. All file paths are relative to the project root.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Clone & Run](#clone--run)
3. [Project Structure](#project-structure)
4. [Customization: Site Config](#customization-site-config)
5. [Customization: Data Files](#customization-data-files)
6. [Customization: UI Strings (i18n)](#customization-ui-strings-i18n)
7. [Customization: Profile Photo](#customization-profile-photo)
8. [Customization: Environment Variables](#customization-environment-variables)
9. [Build & Verify](#build--verify)
10. [Deploy](#deploy)
11. [Post-Deployment](#post-deployment)
12. [Advanced: Adding a Language](#advanced-adding-a-language)
13. [Advanced: Hiding Sections](#advanced-hiding-sections)
14. [Tech Stack Reference](#tech-stack-reference)

---

## Prerequisites

- **Node.js** 18+ and **npm**
- **Git**
- A **GitHub** account
- (Optional) A **Vercel** or **Netlify** account for deployment

---

## Clone & Run

Get the template running locally **before** customizing anything.

```bash
# 1. Clone the template
git clone https://github.com/zer0-kr/awesome-portfolio-template.git my-portfolio
cd my-portfolio

# 2. Remove the template's git history and start fresh
rm -rf .git
git init
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open http://localhost:3000 — you should see the sample portfolio with placeholder data.

> **Alternative**: Use the GitHub **"Use this template"** button to create a new repo directly, then clone your new repo.

---

## Project Structure

```
src/
├── config/
│   └── site.ts              # Central configuration (URL, author, social, nav, sections, SEO)
├── data/                     # Your content — 7 data files to customize
│   ├── profile.ts            # Bio, education, military service
│   ├── experience.ts         # Work history
│   ├── career-summary.ts     # Portfolio overview, achievements, competencies
│   ├── career-detail.ts      # Detailed project narratives
│   ├── credentials.ts        # Certifications and awards
│   ├── speaking.ts           # Talks, lectures, community
│   └── projects.ts           # Side projects
├── messages/                 # UI strings (i18n)
│   ├── ko.json               # Korean
│   └── en.json               # English
├── components/               # React components (no edits needed for basic setup)
├── app/                      # Next.js App Router pages
├── i18n/                     # Internationalization config
└── middleware.ts             # Locale detection
public/
├── profile.png               # Your profile photo
├── favicon.svg               # Site favicon
└── site.webmanifest          # PWA manifest
```

---

## Customization: Site Config

**File**: `src/config/site.ts`

This is the central configuration file. Every field must be updated.

```typescript
export const siteConfig = {
  // Production URL — update after deployment
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://your-portfolio.vercel.app",

  author: {
    name: { ko: "홍길동", en: "John Doe" },           // Your full name
    title: { ko: "소프트웨어 엔지니어", en: "Software Engineer" }, // Job title
    email: "hello@example.com",                        // Contact email
  },

  social: {
    github: "https://github.com/username",             // GitHub profile URL
    linkedin: "https://linkedin.com/in/username",      // LinkedIn profile URL
    blog: "https://blog.example.com",                  // Blog URL
  },

  // Navigation items — remove entries to hide them from the nav bar
  nav: [
    "about",
    "experience",
    "career-highlights",
    "speaking",
    "certified",
    "projects",
    "contact",
  ] as const,

  // Section visibility — set to false to hide entire sections
  sections: {
    hero: true,
    about: true,
    experience: true,
    careerHighlights: true,
    speaking: true,
    certified: true,
    projects: true,
    contact: true,
  },

  seo: {
    titleTemplate: "%s | John Doe",                    // Page title format
    defaultTitle: "John Doe | Software Engineer",      // Homepage title
    description: "Personal portfolio showcasing ...",  // Meta description
    keywords: ["portfolio", "engineer"],               // Meta keywords
  },

  // Google Search Console verification code (optional)
  googleVerification: "",
};

export type NavKey = (typeof siteConfig.nav)[number];
```

---

## Customization: Data Files

All data files are in `src/data/`. Each file exports typed data with Korean (`ko`) and English (`en`) variants for internationalization.

### `profile.ts` — Bio & Education

No TypeScript interface — exports a plain object.

```typescript
export const profile = {
  name: {
    ko: "홍길동",
    en: "John Doe",
  },
  title: {
    ko: "소프트웨어 엔지니어",
    en: "Software Engineer",
  },
  birth: "1990.01",
  links: {
    email: "hello@example.com",
    blog: "https://blog.example.com",
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
  },
  education: [
    {
      school: "서울대학교",
      schoolEn: "Seoul National University",
      major: "컴퓨터공학과",
      majorEn: "Computer Science",
      degree: "학사",
      degreeEn: "B.S.",
      date: "2012.03 - 2016.02",
    },
  ],
  military: {
    ko: "육군 병장 만기전역 (2016.03 - 2017.12)",
    en: "ROK Army Sergeant, Honorable Discharge (2016.03 - 2017.12)",
  },
};
```

### `experience.ts` — Work History

```typescript
export interface Experience {
  company: string;        // Company name (Korean)
  companyEn: string;      // Company name (English)
  role: string;           // Job title (Korean)
  roleEn: string;         // Job title (English)
  team: string;           // Team/department (Korean)
  teamEn: string;         // Team/department (English)
  period: string;         // Employment period display (Korean), e.g. "2022.01 - 현재"
  periodEn: string;       // Employment period display (English), e.g. "2022.01 - Present"
  startDate: string;      // ISO-ish start date for sorting, e.g. "2022-01"
  endDate: string | null; // null = currently employed
  description: string[];  // Key achievements/responsibilities (Korean)
  descriptionEn: string[];// Key achievements/responsibilities (English)
  tags: string[];         // Technology/skill tags
}

export const experiences: Experience[] = [
  {
    company: "테크컴퍼니",
    companyEn: "Tech Company",
    role: "시니어 소프트웨어 엔지니어",
    roleEn: "Senior Software Engineer",
    team: "플랫폼팀",
    teamEn: "Platform Team",
    period: "2022.01 - 현재",
    periodEn: "2022.01 - Present",
    startDate: "2022-01",
    endDate: null,
    description: [
      "마이크로서비스 아키텍처 설계 및 구현",
      "CI/CD 파이프라인 구축",
    ],
    descriptionEn: [
      "Designed and implemented microservice architecture",
      "Built CI/CD pipelines",
    ],
    tags: ["Kubernetes", "Go", "AWS"],
  },
];
```

### `career-summary.ts` — Portfolio Overview

```typescript
export interface CareerHighlight {
  title: string;       // Highlight category title (Korean)
  titleEn: string;     // Highlight category title (English)
  items: string[];     // Achievement bullet points (Korean)
  itemsEn: string[];   // Achievement bullet points (English)
}

// Career overview paragraph
export const careerOverview = {
  ko: "보안 전문가로서 10년간...",
  en: "As a security professional with 10 years...",
};

// Key achievements grouped by category
export const careerHighlights: CareerHighlight[] = [
  {
    title: "인증 및 컴플라이언스",
    titleEn: "Certification & Compliance",
    items: ["ISMS 인증 취득", "ISO 27001 구축"],
    itemsEn: ["Achieved ISMS certification", "Established ISO 27001"],
  },
];

// Self-developed tools
export const selfDevelopedTools: { ko: string; en: string }[] = [
  { ko: "보안 점검 자동화 도구", en: "Security audit automation tool" },
];

// Core competencies
export const coreCompetencies: { ko: string; en: string }[] = [
  { ko: "클라우드 보안 아키텍처", en: "Cloud security architecture" },
];
```

### `career-detail.ts` — Detailed Project Narratives

This powers the `/career` detail page.

```typescript
export interface CareerDetailItem {
  text: string;          // Content (Korean)
  textEn: string;        // Content (English)
  subItems?: {           // Optional nested bullet points
    text: string;
    textEn: string;
  }[];
}

export interface SubSection {
  title: string;         // Sub-section title (Korean)
  titleEn: string;       // Sub-section title (English)
  items: CareerDetailItem[];
}

export interface CareerDetailSection {
  id: string;            // Unique section ID (used for URL anchors)
  title: string;         // Section title (Korean)
  titleEn: string;       // Section title (English)
  background: CareerDetailItem[];  // Why this project existed
  role: SubSection[];              // What you did (grouped by sub-role)
  results: CareerDetailItem[];     // Outcomes and impact
  lessons: CareerDetailItem[];     // Lessons learned
}

export const careerDetails: CareerDetailSection[] = [
  {
    id: "cloud-security",
    title: "클라우드 보안 체계 구축",
    titleEn: "Cloud Security Framework",
    background: [
      {
        text: "급격한 클라우드 전환으로 보안 체계 부재",
        textEn: "Lack of security framework during rapid cloud migration",
      },
    ],
    role: [
      {
        title: "보안 아키텍처 설계",
        titleEn: "Security Architecture Design",
        items: [
          {
            text: "AWS 보안 아키텍처 설계",
            textEn: "Designed AWS security architecture",
            subItems: [
              { text: "VPC 네트워크 분리", textEn: "VPC network segmentation" },
            ],
          },
        ],
      },
    ],
    results: [
      { text: "보안 사고 제로", textEn: "Zero security incidents" },
    ],
    lessons: [
      { text: "자동화의 중요성", textEn: "Importance of automation" },
    ],
  },
];
```

### `credentials.ts` — Certifications & Awards

```typescript
export interface Certification {
  name: string;        // Certification name (Korean)
  nameEn: string;      // Certification name (English)
  date: string;        // Date obtained, e.g. "2023.05"
  issuer: string;      // Issuing organization (Korean)
  issuerEn: string;    // Issuing organization (English)
  url?: string;        // Verification URL (optional)
  highlight?: boolean; // true = featured with badge
  category: "security" | "kubernetes" | "general"; // Category for grouping
}

export interface Award {
  title: string;       // Award title (Korean)
  titleEn: string;     // Award title (English)
  issuer: string;      // Issuing organization (Korean)
  issuerEn: string;    // Issuing organization (English)
  date: string;        // Date received
  highlight?: boolean; // true = featured with badge
}

export const certifications: Certification[] = [
  {
    name: "정보보안기사",
    nameEn: "Information Security Engineer",
    date: "2020.06",
    issuer: "한국인터넷진흥원",
    issuerEn: "KISA",
    category: "security",
    highlight: true,
  },
];

export const awards: Award[] = [
  {
    title: "최우수 발표상",
    titleEn: "Best Presentation Award",
    issuer: "한국정보보호학회",
    issuerEn: "KIISC",
    date: "2023.11",
    highlight: true,
  },
];
```

### `speaking.ts` — Talks & Community

```typescript
export interface Talk {
  title: string;       // Talk title (Korean)
  titleEn: string;     // Talk title (English)
  date: string;        // Date, e.g. "2024.03"
  venue: string;       // Event/venue name (Korean)
  venueEn: string;     // Event/venue name (English)
  slidesUrl?: string;  // Link to slides (optional)
  videoUrl?: string;    // Link to video recording (optional)
  highlight?: boolean; // true = featured with badge
}

export interface Community {
  role: string;          // Your role (Korean)
  roleEn: string;       // Your role (English)
  organization: string;  // Organization name (Korean)
  organizationEn: string;// Organization name (English)
  period: string;        // Activity period (Korean)
  periodEn: string;      // Activity period (English)
  active: boolean;       // true = currently active
}

export const talks: Talk[] = [
  {
    title: "클라우드 보안 실무",
    titleEn: "Cloud Security in Practice",
    date: "2024.03",
    venue: "DEVSECCON Seoul",
    venueEn: "DEVSECCON Seoul",
    highlight: true,
  },
];

export const communities: Community[] = [
  {
    role: "운영진",
    roleEn: "Organizer",
    organization: "클라우드 보안 커뮤니티",
    organizationEn: "Cloud Security Community",
    period: "2023.01 - 현재",
    periodEn: "2023.01 - Present",
    active: true,
  },
];
```

### `projects.ts` — Side Projects

```typescript
export interface Project {
  title: string;       // Project name (Korean)
  titleEn: string;     // Project name (English)
  period: string;      // Development period (Korean)
  periodEn: string;    // Development period (English)
  goals: string[];     // Project goals (Korean)
  goalsEn: string[];   // Project goals (English)
  contents: string[];  // What was built (Korean)
  contentsEn: string[];// What was built (English)
  results: string[];   // Outcomes (Korean)
  resultsEn: string[]; // Outcomes (English)
  tags: string[];      // Technology tags
  url?: string;        // Link to project (optional)
}

export const projects: Project[] = [
  {
    title: "보안 점검 자동화 도구",
    titleEn: "Security Audit Automation Tool",
    period: "2024.01 - 2024.06",
    periodEn: "2024.01 - 2024.06",
    goals: ["수동 점검 프로세스 자동화"],
    goalsEn: ["Automate manual audit processes"],
    contents: ["Python 기반 점검 스크립트 개발"],
    contentsEn: ["Developed Python-based audit scripts"],
    results: ["점검 시간 80% 단축"],
    resultsEn: ["Reduced audit time by 80%"],
    tags: ["Python", "AWS", "Terraform"],
    url: "https://github.com/username/security-audit-tool",
  },
];
```

---

## Customization: UI Strings (i18n)

**Files**: `src/messages/ko.json` and `src/messages/en.json`

These files contain all UI text (section headings, button labels, etc.). Both files share the same key structure. Update **both files** when customizing.

### Full Key Structure

```json
{
  "nav": {
    "about": "소개",
    "experience": "경력",
    "certified": "자격·수상",
    "speaking": "발표",
    "projects": "프로젝트",
    "contact": "연락처",
    "career-highlights": "포트폴리오"
  },
  "hero": {
    "greeting": "안녕하세요",
    "name": "홍길동",
    "title": "Security Compliance Engineer",
    "subtitle": "Cloud Native 환경에서 합리적인 정보보호 체계를 구축합니다",
    "cta_resume": "포트폴리오",
    "cta_contact": "연락하기"
  },
  "about": {
    "heading": "About",
    "description_1": "첫 번째 소개 문단",
    "description_2": "두 번째 소개 문단",
    "description_3": "세 번째 소개 문단 (상세 자기소개)",
    "keywords": ["Skill1", "Skill2", "Skill3"]
  },
  "experience": {
    "heading": "Experience"
  },
  "certified": {
    "heading": "Certified",
    "certifications": "자격증",
    "awards": "수상"
  },
  "speaking": {
    "heading": "Speaking & Community",
    "talks": "발표·강의",
    "community": "커뮤니티"
  },
  "projects": {
    "heading": "Projects"
  },
  "contact": {
    "heading": "Contact",
    "description": "협업, 강연, 채용 등 편하게 연락 주세요.",
    "email": "이메일",
    "blog": "블로그",
    "github": "GitHub",
    "linkedin": "LinkedIn"
  },
  "footer": {
    "copyright": "© 2026 홍길동. All rights reserved.",
    "built_with": "Built with Next.js & Tailwind CSS"
  },
  "common": {
    "present": "현재",
    "goal": "목표",
    "content": "내용",
    "result": "성과",
    "view_more": "가이드라인 바로가기",
    "view_slides": "발표 자료",
    "view_video": "영상 보기",
    "featured": "Featured",
    "active": "활동 중"
  },
  "career_highlights": {
    "heading": "Portfolio",
    "overview_label": "개요",
    "achievements_label": "주요 성과",
    "competencies_label": "핵심 역량",
    "cta_title": "더 자세히 알아보기",
    "cta_description": "각 프로젝트의 배경, 수행 역할, 성과와 교훈을 확인하세요.",
    "cta_button": "상세 보기",
    "self_developed_tools_label": "자체 개발 도구"
  },
  "career_story": {
    "title": "포트폴리오",
    "subtitle": "각 성과의 배경, 역할, 결과와 교훈을 상세히 소개합니다.",
    "back": "뒤로가기",
    "background": "배경",
    "role": "역할",
    "results": "결과 & 임팩트",
    "lessons": "Lessons Learned",
    "toc": "목차"
  }
}
```

### Fields You MUST Update

| Key | What It Is |
|-----|-----------|
| `hero.greeting` | Greeting text on the hero section |
| `hero.name` | Your display name |
| `hero.title` | Your professional title |
| `hero.subtitle` | One-line professional summary |
| `about.description_1` | First intro paragraph |
| `about.description_2` | Second intro paragraph |
| `about.description_3` | Detailed self-introduction |
| `about.keywords` | Skill/keyword tags shown in About section |
| `contact.description` | Contact section description |
| `footer.copyright` | Copyright notice with your name |

### Fields You MAY Update

| Key | What It Is |
|-----|-----------|
| `hero.cta_resume` | CTA button text (left) |
| `hero.cta_contact` | CTA button text (right) |
| `nav.*` | Navigation labels |
| `career_highlights.*` | Portfolio section labels |
| `career_story.*` | Career detail page labels |
| Section `heading` values | Section header text |

> **Important**: Update both `ko.json` AND `en.json`. The app switches between them based on user's language selection.

---

## Customization: Profile Photo

Replace `public/profile.png` with your own photo.

- **Format**: PNG or WebP
- **Size**: Square, at least 400×400px recommended
- **Used in**: About section + Open Graph (social sharing) images

---

## Customization: Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=https://your-name.vercel.app
```

> This value is used for SEO metadata, Open Graph images, and sitemap generation. Set it to your production URL after deployment.

---

## Build & Verify

```bash
# Build for production
npm run build
```

If the build succeeds, run the production server locally to verify:

```bash
npm run start
```

### Verification Checklist

Open http://localhost:3000 and confirm:

- [ ] Your name and title appear correctly in the hero section
- [ ] All sections display your content (not sample data)
- [ ] Language switching works (Korean ↔ English)
- [ ] Dark/light mode toggle works
- [ ] Navigation links scroll to the correct sections
- [ ] Profile photo appears in the About section
- [ ] `/career` page loads and shows your detailed project narratives

---

## Deploy

### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy — follow the interactive prompts
vercel

# Set the production URL environment variable
vercel env add NEXT_PUBLIC_BASE_URL
# Enter: https://your-project.vercel.app (or your custom domain)

# Deploy to production
vercel --prod
```

### Option B: Vercel Dashboard

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your GitHub repository
4. Add environment variable: `NEXT_PUBLIC_BASE_URL` = your production URL
5. Click **Deploy**

Or use the one-click deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zer0-kr/awesome-portfolio-template)

### Option C: Netlify CLI

```bash
# Install Netlify CLI (if not installed)
npm i -g netlify-cli

# Login to Netlify
netlify login

# Build first
npm run build

# Create a new site and deploy
netlify init
netlify deploy --prod
```

### Option D: Self-Hosted

```bash
npm run build
npm run start
# The app runs on port 3000 by default
# Use a reverse proxy (nginx, caddy) for production
```

---

## Post-Deployment

After your site is live:

1. **Update the production URL** in `src/config/site.ts`:
   ```typescript
   url: "https://your-actual-domain.com",
   ```

2. **Update `NEXT_PUBLIC_BASE_URL`** in your hosting provider's environment variables to match.

3. **Rebuild and redeploy** to apply the URL change.

4. **(Optional) Google Search Console**:
   - Verify your site in [Google Search Console](https://search.google.com/search-console)
   - Copy the verification code and add it to `siteConfig.googleVerification`
   - Submit your sitemap: `https://your-domain.com/sitemap.xml`

---

## Advanced: Adding a Language

To add a language beyond Korean and English (e.g., Japanese):

1. Create `src/messages/ja.json` — copy from `en.json` and translate all values
2. Edit `src/i18n/routing.ts` — add `"ja"` to the `locales` array
3. Edit `src/middleware.ts` — add `"ja"` to the locale matcher pattern
4. Add the new locale variant to all text fields in `src/data/*.ts` files (e.g., add `titleJa`, `textJa` fields)

---

## Advanced: Hiding Sections

To hide a section you don't need:

1. Set it to `false` in `siteConfig.sections`:
   ```typescript
   sections: {
     speaking: false,  // Hides the Speaking section
   }
   ```
2. Remove its entry from `siteConfig.nav` to also remove it from the navigation bar.

No need to delete component files — they simply won't render.

---

## Tech Stack Reference

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16 | React framework (App Router) |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| next-intl | 4.x | Internationalization (i18n) |
| next-themes | 0.4.x | Dark/light mode |
| Framer Motion | 12.x | Scroll & page animations |
| Lucide React | — | Icons |
