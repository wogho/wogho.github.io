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
    company: "(주)밸로프",
    companyEn: "VALOFE Co. Ltd",
    role: "사원",
    roleEn: "Associate",
    team: "인프라팀",
    teamEn: "Infra Team",
    period: "2021.01. ~ 2022.12.",
    periodEn: "Jan 2021 — Dec 2022",
    startDate: "2021-01",
    endDate: "2022-12",
    description: [
      "On-Prem 서버 및 OS 구축 관리",
      "AWS, NCP, GCP 멀티 클라우드 인프라 구성",
      "EDR/NGAV 정책 수립, 보안 이벤트 대응",
      "Nagios 기반 모니터링 구축",
    ],
    descriptionEn: [
      "On-Prem server & OS build and management",
      "Multi-cloud infrastructure setup (AWS, NCP, GCP)",
      "EDR/NGAV policy setup & security event response",
      "Built Nagios-based infrastructure monitoring",
    ],
    tags: ["Linux", "AWS", "EDR/NGAV", "FortiGate"],
  },
];
