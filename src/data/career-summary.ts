export interface CareerHighlight {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const careerOverview = {
  ko: "게임사 인프라팀에서 2년간 On-Prem 서버 구축부터 멀티 클라우드 운영, 네트워크 보안까지 폭넓은 실무를 경험했습니다.\n보안과 인프라를 연결하는 엔지니어로서 안정적인 환경 구축을 목표로 성장하고 있습니다.",
  en: "Gained broad hands-on experience over 2 years at a gaming company's infrastructure team — from On-Prem server builds to multi-cloud operations and network security.\nGrowing as an engineer who bridges security and infrastructure.",
};

export const careerHighlights: CareerHighlight[] = [
  {
    title: "본사/지사 간 NAS 동기화 통합",
    titleEn: "HQ–Branch NAS Synchronization Integration",
    items: [
      "중국 폐쇄망 환경에서의 대용량 파일 전송 실패 문제 해결",
      "전용선 구간 NAT 1:1 매핑 설정 및 QoS 비용 절감",
      "파일 전송 시간 200분 → 40분 이내 단축 (500% 이상 향상)",
      "부서별 접근 권한 분리 및 단방향 동기화 구성",
    ],
    itemsEn: [
      "Resolved large-file transfer failures in China's GFW-restricted network environment",
      "Reduced costs with dual-path design: dedicated line (QoS 5Mbps) + public line (30Mbps)",
      "Cut 1.5GB file transfer time from 200min to within 40min (500%+ improvement)",
      "Configured Synology ShareSync with per-department access control and one-way sync",
    ],
  },
  {
    title: "시스템 접근 VPN 정책 개편 및 통합",
    titleEn: "VPN Policy Overhaul & Integrated Access Management",
    items: [
      "클라우드 및 IDC 접속 경로 단일화",
      "FortiGate Site-to-Site 터널링 및 그룹 기반 IP 대역 정책 할당",
      "내부 SSL-VPN 공유 방지를 위한 OpenVPN 구축",
      "입·퇴사자 권한 처리 시간 기존 대비 약 70% 단축",
    ],
    itemsEn: [
      "Unified access paths for Cloud (FortiGate 80E) and IDC (FortiGate 1000D)",
      "Systematized policies via FortiGate Site-to-Site tunneling and group-based IP allocation",
      "Built dedicated OpenVPN for external users with EasyRSA certificates and Google OTP 2FA",
      "Reduced onboarding/offboarding access management time by approximately 70%",
    ],
  },
  {
    title: "EDR/NGAV 도입 및 안정화 운영",
    titleEn: "EDR/NGAV Deployment & Operational Stabilization",
    items: [
      "KISA CERT 가이드 기반 보안 체크리스트·솔루션 비교표 작성 참여",
      "개발 소스코드 오탐 문제를 MD5 해시값 대조로 판별하는 실무 절차 구축",
      "Whitelist 등록 후 Prevent 모드 전환 검증, 개발팀 업무 영향 없이 안정화",
      "Fileless·랜섬웨어 변종 등 기존 백신이 탐지 못한 위협 차단 및 보안 사고 0건 유지",
    ],
    itemsEn: [
      "Participated in KISA CERT-based security checklist and solution comparison",
      "Built MD5 hash verification procedure to identify false positives on dev source files",
      "Validated Prevent mode transition after whitelist registration with zero dev team disruption",
      "Blocked threats (Fileless, ransomware variants) undetectable by legacy AV; zero security incidents",
    ],
  },
];

export const selfDevelopedTools: { ko: string; en: string }[] = [];

export const coreCompetencies = [
  {
    ko: "IDC 서버 구축·운영 및 가상화 환경 관리",
    en: "IDC server deployment, operations, and virtualization management",
  },
  {
    ko: "네트워크 보안 설계 — VPN, 방화벽 정책, 접근 통제",
    en: "Network security design — VPN, firewall policy, and access control",
  },
  {
    ko: "EDR/NGAV 도입 및 보안 관제 운영",
    en: "EDR/NGAV deployment and security monitoring operations",
  },
  {
    ko: "멀티 클라우드(AWS, NCP, GCP) 인프라 운영",
    en: "Multi-cloud (AWS, NCP, GCP) infrastructure operations",
  },
];
