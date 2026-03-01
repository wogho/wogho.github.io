export interface CareerHighlight {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const careerOverview = {
  ko: "8년간의 소프트웨어 엔지니어링 경력을 통해 대규모 서비스의 아키텍처 설계부터 성능 최적화, 팀 리딩까지 폭넓은 경험을 쌓아왔습니다. 사용자 중심의 문제 해결과 데이터 기반 의사결정을 통해 기술이 비즈니스 성장의 핵심 동력이 되도록 설계하는 것을 지향합니다.",
  en: "Over 8 years of software engineering experience spanning architecture design for large-scale services, performance optimization, and team leadership. I focus on user-centric problem solving and data-driven decisions to ensure technology serves as a core driver of business growth.",
};

export const careerHighlights: CareerHighlight[] = [
  {
    title: "마이크로서비스 아키텍처 전환",
    titleEn: "Microservices Architecture Migration",
    items: [
      "모놀리식 시스템을 12개 마이크로서비스로 성공적으로 분리",
      "서비스 간 통신을 위한 이벤트 드리븐 아키텍처 설계",
      "무중단 마이그레이션 전략 수립 및 실행",
    ],
    itemsEn: [
      "Successfully decomposed monolithic system into 12 microservices",
      "Designed event-driven architecture for inter-service communication",
      "Planned and executed zero-downtime migration strategy",
    ],
  },
  {
    title: "대규모 트래픽 성능 최적화",
    titleEn: "Large-Scale Traffic Performance Optimization",
    items: [
      "초당 10,000 요청 처리를 위한 캐싱 전략 및 데이터베이스 최적화",
      "CDN 구성 및 정적 자산 최적화로 응답 시간 60% 단축",
      "APM 도입 및 성능 모니터링 체계 구축",
    ],
    itemsEn: [
      "Caching strategy and database optimization for 10,000 requests per second",
      "Reduced response time by 60% through CDN configuration and static asset optimization",
      "Introduced APM and established performance monitoring framework",
    ],
  },
  {
    title: "개발 문화 및 팀 리더십",
    titleEn: "Engineering Culture & Team Leadership",
    items: [
      "코드 리뷰 문화 정착 및 팀 내 기술 공유 세미나 운영",
      "주니어 개발자 온보딩 프로그램 설계 및 멘토링",
      "애자일 프로세스 도입으로 스프린트 완료율 30% 향상",
    ],
    itemsEn: [
      "Established code review culture and ran internal tech sharing seminars",
      "Designed junior developer onboarding program and mentoring",
      "Improved sprint completion rate by 30% through agile process adoption",
    ],
  },
  {
    title: "CI/CD 및 인프라 자동화",
    titleEn: "CI/CD & Infrastructure Automation",
    items: [
      "GitHub Actions 기반 CI/CD 파이프라인 구축 및 운영",
      "Infrastructure as Code를 활용한 클라우드 인프라 관리",
      "컨테이너 오케스트레이션 환경 구축 및 자동 스케일링 구현",
    ],
    itemsEn: [
      "Built and operated CI/CD pipelines using GitHub Actions",
      "Managed cloud infrastructure with Infrastructure as Code",
      "Set up container orchestration with auto-scaling capabilities",
    ],
  },
  {
    title: "오픈소스 기여 및 커뮤니티 활동",
    titleEn: "Open Source Contributions & Community",
    items: [
      "CLI 스캐폴딩 도구 오픈소스 프로젝트 주도 개발",
      "기술 블로그 및 컨퍼런스 발표를 통한 지식 공유",
      "AI를 활용한 개발 생산성 도구 자체 개발 및 배포",
    ],
    itemsEn: [
      "Led development of open-source CLI scaffolding tool",
      "Shared knowledge through tech blog and conference talks",
      "Self-developed and deployed developer productivity tools leveraging AI",
    ],
    // Sub-tools list for display
  },
];

export const selfDevelopedTools = [
  { ko: "프로젝트 스캐폴딩 CLI 도구", en: "Project Scaffolding CLI Tool" },
  { ko: "API 문서 자동 생성기", en: "API Documentation Auto-Generator" },
  {
    ko: "데이터베이스 마이그레이션 검증 도구",
    en: "Database Migration Validation Tool",
  },
];

export const coreCompetencies = [
  {
    ko: "대규모 시스템 아키텍처 설계 및 마이크로서비스 전환",
    en: "Large-scale system architecture design and microservices migration",
  },
  {
    ko: "성능 최적화 및 데이터 기반 의사결정",
    en: "Performance optimization and data-driven decision making",
  },
  {
    ko: "CI/CD 파이프라인 구축 및 인프라 자동화",
    en: "CI/CD pipeline construction and infrastructure automation",
  },
  {
    ko: "팀 리더십 및 개발 문화 조성",
    en: "Team leadership and engineering culture cultivation",
  },
];
