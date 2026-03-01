export interface Project {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  goals: string[];
  goalsEn: string[];
  contents: string[];
  contentsEn: string[];
  results: string[];
  resultsEn: string[];
  tags: string[];
  url?: string;
}

export const projects: Project[] = [
  {
    title: "오픈소스 CLI 도구 개발",
    titleEn: "Open Source CLI Tool Development",
    period: "2023.06. ~ 2023.12.",
    periodEn: "Jun 2023 — Dec 2023",
    goals: [
      "개발자 생산성 향상을 위한 프로젝트 스캐폴딩 CLI 도구 개발",
      "다양한 프레임워크와 언어를 지원하는 확장 가능한 플러그인 시스템 설계",
    ],
    goalsEn: [
      "Develop a project scaffolding CLI tool to improve developer productivity",
      "Design an extensible plugin system supporting various frameworks and languages",
    ],
    contents: [
      "TypeScript 기반 CLI 프레임워크 구현 및 npm 패키지 배포",
      "플러그인 아키텍처 설계로 커뮤니티 기여 확장성 확보",
      "인터랙티브 프롬프트 및 템플릿 엔진 통합",
    ],
    contentsEn: [
      "Implemented TypeScript-based CLI framework and published as npm package",
      "Designed plugin architecture enabling community contribution scalability",
      "Integrated interactive prompts and template engine",
    ],
    results: [
      "GitHub 스타 500개 이상 달성 및 월간 다운로드 2,000건 기록",
      "커뮤니티 기여자 15명 확보 및 10개 이상의 공식 플러그인 배포",
      "기술 블로그 게시 후 국내 개발자 커뮤니티에서 주목받음",
    ],
    resultsEn: [
      "Achieved 500+ GitHub stars and 2,000 monthly downloads",
      "Attracted 15 community contributors and published 10+ official plugins",
      "Gained attention in domestic developer community after tech blog publication",
    ],
    tags: ["TypeScript", "Node.js", "CLI", "Open Source"],
    url: "https://github.com/example/cli-tool",
  },
  {
    title: "이커머스 플랫폼 구축",
    titleEn: "E-Commerce Platform Development",
    period: "2021.01. ~ 2021.09.",
    periodEn: "Jan 2021 — Sep 2021",
    goals: [
      "중소규모 판매자를 위한 확장 가능한 이커머스 플랫폼 설계",
      "실시간 재고 관리 및 결제 시스템 통합",
    ],
    goalsEn: [
      "Design a scalable e-commerce platform for small-to-medium sellers",
      "Integrate real-time inventory management and payment systems",
    ],
    contents: [
      "Next.js 기반 SSR 프론트엔드와 마이크로서비스 백엔드 구현",
      "Stripe 결제 연동 및 주문 처리 워크플로우 자동화",
      "Elasticsearch 기반 상품 검색 엔진 구축",
    ],
    contentsEn: [
      "Implemented SSR frontend with Next.js and microservices backend",
      "Integrated Stripe payments and automated order processing workflows",
      "Built product search engine powered by Elasticsearch",
    ],
    results: [
      "출시 3개월 만에 월간 활성 사용자 10,000명 달성",
      "평균 페이지 로딩 시간 1.2초로 최적화하여 이탈률 35% 감소",
      "판매자 온보딩 프로세스 자동화로 운영 비용 40% 절감",
    ],
    resultsEn: [
      "Reached 10,000 monthly active users within 3 months of launch",
      "Optimized average page load to 1.2s, reducing bounce rate by 35%",
      "Reduced operational costs by 40% through automated seller onboarding",
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "Elasticsearch", "AWS"],
    url: "https://example.com/ecommerce-demo",
  },
];
