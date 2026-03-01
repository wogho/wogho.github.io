export interface Talk {
  title: string;
  titleEn: string;
  date: string;
  venue: string;
  venueEn: string;
  slidesUrl?: string;
  videoUrl?: string;
  highlight?: boolean;
}

export interface Community {
  role: string;
  roleEn: string;
  organization: string;
  organizationEn: string;
  period: string;
  periodEn: string;
  active: boolean;
}

export const talks: Talk[] = [
  {
    title: "모놀리스에서 마이크로서비스로: 실전 마이그레이션 전략",
    titleEn: "From Monolith to Microservices: Real-World Migration Strategies",
    date: "2025.09.",
    venue: "FEConf 2025",
    venueEn: "FEConf 2025",
    slidesUrl: "https://example.com/slides/microservices-migration",
    videoUrl: "https://example.com/videos/microservices-migration",
    highlight: true,
  },
  {
    title: "초당 10,000 요청을 처리하는 Node.js 성능 최적화",
    titleEn: "Node.js Performance Optimization for 10K Requests Per Second",
    date: "2025.03.",
    venue: "Seoul JS Meetup",
    venueEn: "Seoul JS Meetup",
    slidesUrl: "https://example.com/slides/nodejs-performance",
    highlight: true,
  },
  {
    title: "스타트업에서 대규모 서비스까지: 아키텍처 진화 이야기",
    titleEn: "From Startup to Scale: An Architecture Evolution Story",
    date: "2024.11.",
    venue: "개발자 컨퍼런스 코리아",
    venueEn: "Developer Conference Korea",
    slidesUrl: "https://example.com/slides/architecture-evolution",
  },
  {
    title: "효과적인 코드 리뷰 문화 만들기",
    titleEn: "Building an Effective Code Review Culture",
    date: "2024.06.",
    venue: "사내 기술 세미나",
    venueEn: "Internal Tech Seminar",
  },
  {
    title: "오픈소스 CLI 도구 개발기",
    titleEn: "Building an Open Source CLI Tool: Lessons Learned",
    date: "2023.12.",
    venue: "오픈소스 컨트리뷰톤",
    venueEn: "Open Source Contributhon",
    slidesUrl: "https://example.com/slides/cli-tool-development",
  },
];

export const communities: Community[] = [
  {
    role: "운영진",
    roleEn: "Organizer",
    organization: "Seoul JS Meetup",
    organizationEn: "Seoul JS Meetup",
    period: "2024.01. ~ 현재",
    periodEn: "Jan 2024 — Present",
    active: true,
  },
  {
    role: "멘토",
    roleEn: "Mentor",
    organization: "오픈소스 컨트리뷰톤",
    organizationEn: "Open Source Contributhon",
    period: "2022.06. ~ 현재",
    periodEn: "Jun 2022 — Present",
    active: true,
  },
];
