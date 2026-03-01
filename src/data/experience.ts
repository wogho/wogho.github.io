export interface Experience {
  company: string;
  companyEn: string;
  role: string;
  roleEn: string;
  team: string;
  teamEn: string;
  period: string;
  periodEn: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  descriptionEn: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "테크코프",
    companyEn: "TechCorp",
    role: "시니어 소프트웨어 엔지니어",
    roleEn: "Senior Software Engineer",
    team: "플랫폼팀",
    teamEn: "Platform Team",
    period: "2022.03. ~ 현재",
    periodEn: "Mar 2022 — Present",
    startDate: "2022-03",
    endDate: null,
    description: [
      "대규모 트래픽 처리를 위한 마이크로서비스 아키텍처 설계 및 구현",
      "CI/CD 파이프라인 구축 및 배포 자동화로 배포 주기 70% 단축",
      "실시간 모니터링 시스템 구축으로 장애 감지 시간 80% 개선",
      "주니어 개발자 멘토링 및 코드 리뷰 프로세스 정립",
    ],
    descriptionEn: [
      "Designed and implemented microservices architecture for high-traffic processing",
      "Built CI/CD pipelines and deployment automation, reducing deployment cycles by 70%",
      "Improved incident detection time by 80% through real-time monitoring system",
      "Mentored junior developers and established code review processes",
    ],
    tags: ["TypeScript", "Node.js", "Kubernetes", "AWS", "PostgreSQL"],
  },
  {
    company: "스타트업AI",
    companyEn: "StartupAI",
    role: "풀스택 개발자",
    roleEn: "Full Stack Developer",
    team: "프로덕트팀",
    teamEn: "Product Team",
    period: "2020.01. ~ 2022.02.",
    periodEn: "Jan 2020 — Feb 2022",
    startDate: "2020-01",
    endDate: "2022-02",
    description: [
      "AI 기반 추천 시스템의 프론트엔드 및 백엔드 개발",
      "GraphQL API 설계 및 React 기반 대시보드 구축",
      "사용자 행동 분석 파이프라인 구축으로 전환율 25% 향상",
    ],
    descriptionEn: [
      "Developed frontend and backend for AI-powered recommendation system",
      "Designed GraphQL APIs and built React-based analytics dashboard",
      "Improved conversion rate by 25% through user behavior analysis pipeline",
    ],
    tags: ["React", "GraphQL", "Python", "Docker", "Redis"],
  },
  {
    company: "데이터플로우",
    companyEn: "DataFlow Inc.",
    role: "백엔드 개발자",
    roleEn: "Backend Developer",
    team: "데이터엔지니어링팀",
    teamEn: "Data Engineering Team",
    period: "2018.03. ~ 2019.12.",
    periodEn: "Mar 2018 — Dec 2019",
    startDate: "2018-03",
    endDate: "2019-12",
    description: [
      "대용량 데이터 처리 파이프라인 설계 및 구현",
      "RESTful API 서버 개발 및 데이터베이스 최적화",
      "배치 처리 시스템 리팩토링으로 처리 속도 3배 향상",
    ],
    descriptionEn: [
      "Designed and implemented large-scale data processing pipelines",
      "Developed RESTful API servers and optimized database performance",
      "Tripled batch processing speed through system refactoring",
    ],
    tags: ["Java", "Spring Boot", "Kafka", "MySQL", "AWS"],
  },
  {
    company: "웹스튜디오",
    companyEn: "WebStudio",
    role: "주니어 개발자",
    roleEn: "Junior Developer",
    team: "웹개발팀",
    teamEn: "Web Development Team",
    period: "2016.03. ~ 2018.02.",
    periodEn: "Mar 2016 — Feb 2018",
    startDate: "2016-03",
    endDate: "2018-02",
    description: [
      "기업 웹사이트 및 모바일 반응형 웹 애플리케이션 개발",
      "레거시 코드 마이그레이션 및 테스트 커버리지 확대",
      "고객 요구사항 분석 및 기술 문서 작성",
    ],
    descriptionEn: [
      "Developed corporate websites and mobile-responsive web applications",
      "Migrated legacy codebase and expanded test coverage",
      "Analyzed client requirements and authored technical documentation",
    ],
    tags: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];
