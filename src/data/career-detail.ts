export interface SubSection {
  title: string;
  titleEn: string;
  items: CareerDetailItem[];
}

export interface CareerDetailItem {
  text: string;
  textEn: string;
  subItems?: { text: string; textEn: string }[];
}

export interface CareerDetailSection {
  id: string;
  title: string;
  titleEn: string;
  background: CareerDetailItem[];
  role: SubSection[];
  results: CareerDetailItem[];
  lessons: CareerDetailItem[];
}

export const careerDetailSections: CareerDetailSection[] = [
  {
    id: "nas-sync",
    title: "본사/지사 NAS 동기화 통합",
    titleEn: "HQ/Branch NAS Synchronization Integration",
    background: [
      {
        text: "중국 GFW 환경으로 인해 한국 본사-베이징 지사 간 1.5GB 파일 전송 시 200분 이상 소요되거나 실패하는 문제가 발생했습니다.",
        textEn: "Due to China's GFW, large file (1.5 GB) transfers between the Korean HQ and Beijing branch took 200+ minutes or frequently failed.",
      },
      {
        text: "파일 버전 충돌과 디자인·기획 자료 공유 지연으로 업무 흐름이 반복적으로 중단되었습니다.",
        textEn: "File version conflicts and delayed asset sharing repeatedly disrupted the design and planning workflow.",
      },
    ],
    role: [
      {
        title: "회선 성능 테스트 및 아키텍처 설계",
        titleEn: "Line Performance Testing & Architecture Design",
        items: [
          {
            text: "구간별(한국↔상하이, 상하이↔베이징) 업로드 테스트를 진행하여 전용선·공용 회선 성능 데이터를 수집했습니다.",
            textEn: "Performed per-segment upload tests (Korea↔Shanghai, Shanghai↔Beijing) to collect dedicated and public line performance data.",
          },
          {
            text: "테스트 결과를 근거로 전용선(QoS 5 Mbps) + 공용 회선(30 Mbps) 이중 경로 아키텍처를 도출했습니다.",
            textEn: "Derived a dual-path architecture — dedicated line (QoS 5 Mbps) + public line (30 Mbps) — based on measured test results.",
          },
        ],
      },
      {
        title: "네트워크 이중화 및 NAS 동기화 구성",
        titleEn: "Dual-Path Network Setup & NAS Sync Configuration",
        items: [
          {
            text: "전용선 구간 NAT 1:1 매핑과 방화벽 Whitelist 정책을 설정했습니다.",
            textEn: "Configured NAT 1:1 mapping for the dedicated-line segment and applied firewall whitelist policies.",
          },
          {
            text: "파일 충돌 방지를 위해 단방향 동기화(한국→상하이)를 구성하고, Synology ShareSync 부서별 접근 제어와 NAS 백업 설정을 단독 수행했습니다.",
            textEn: "Configured one-way sync (Korea→Shanghai) to prevent conflicts; solely handled Synology ShareSync per-department access control and NAS backup setup.",
          },
        ],
      },
      {
        title: "모니터링 연동",
        titleEn: "Monitoring Integration",
        items: [
          {
            text: "기존 Nagios 모니터링에 동기화 구간 트래픽 지표를 추가하여 병목 선행 감지 체계를 구축했습니다.",
            textEn: "Added sync-segment traffic metrics to the existing Nagios monitoring to enable proactive bottleneck detection.",
          },
        ],
      },
    ],
    results: [
      {
        text: "1.5 GB 파일 전송 시간을 200분 이상에서 40분 이내로 단축하여 전송 효율 500% 이상 향상.",
        textEn: "Reduced 1.5 GB file transfer time from 200+ minutes to under 40 minutes — over 500% improvement.",
      },
      {
        text: "전송 성공률 100% 달성 및 파일 버전 충돌 문제 해소.",
        textEn: "Achieved 100% transfer success rate and eliminated file version conflicts.",
      },
      {
        text: "이중 경로 설계와 QoS 우선순위 지정으로 전용선 단독 도입 대비 비용 절감.",
        textEn: "Reduced costs through dual-path design and QoS prioritization compared to a full dedicated-line deployment.",
      },
    ],
    lessons: [
      {
        text: "이론적 회선 속도가 아닌 실측 데이터를 기반으로 아키텍처를 결정함으로써 비용과 성능을 동시에 최적화할 수 있었습니다.",
        textEn: "Basing architectural decisions on measured per-segment data — not theoretical line speeds — enabled simultaneous optimization of both cost and performance.",
      },
    ],
  },
  {
    id: "vpn-policy",
    title: "부서별 VPN 정책 개편 및 통합 접근 관리",
    titleEn: "VPN Policy Overhaul & Integrated Access Management",
    background: [
      {
        text: "재택근무 확대로 보안 강화가 필요해졌고, 클라우드(SSL-VPN)와 IDC(Gabia) VPN을 별도로 접속해야 하는 운영 비효율이 발생했습니다.",
        textEn: "Remote work expansion required stronger security, while connecting to two separate VPNs — Cloud (SSL-VPN) and IDC (Gabia) — was reducing operational efficiency.",
      },
      {
        text: "사용자별 정책 관리로 인해 온보딩·오프보딩 처리 지연이 심했고, 분산된 접속 로그로 모니터링 및 감사 대응이 어려웠습니다.",
        textEn: "Per-user policy management caused significant onboarding/offboarding delays, and fragmented access logs made monitoring and audit responses difficult.",
      },
    ],
    role: [
      {
        title: "접근 경로 통합",
        titleEn: "Access Path Unification",
        items: [
          {
            text: "FortiGate 80E(클라우드)와 1000D(IDC) 간 Site-to-Site 터널 구성, 포트별 정책 규칙 작성, 그룹별 IP 대역 할당 등 장비 설정을 수행했습니다.",
            textEn: "Performed device configuration including FortiGate Site-to-Site tunneling between 80E (Cloud) and 1000D (IDC), per-port policy rules, and group-based IP range assignment.",
          },
        ],
      },
      {
        title: "외부 접속자용 OpenVPN 구축",
        titleEn: "OpenVPN Setup for External Users",
        items: [
          {
            text: "외부 접속자에게 내부 SSL-VPN을 공유하는 위험을 판단하여 별도 OpenVPN 서버를 구축하고, EasyRSA 인증서 발급과 Google OTP 2FA를 연동했습니다.",
            textEn: "Assessed the risk of sharing SSL-VPN with external users and built a dedicated OpenVPN server with EasyRSA certificate issuance and Google OTP 2FA.",
          },
        ],
      },
      {
        title: "그룹 기반 정책 체계 재설계",
        titleEn: "Group-Based Policy Redesign",
        items: [
          {
            text: "사용자별 정책을 그룹 기반으로 전환하고, VPN 접근 표준 신청 양식을 작성했습니다. 고위험군 계정에 대한 주간 접속 로그 점검을 수행했습니다.",
            textEn: "Transitioned per-user policies to group-based policies, drafted the standard VPN access request form, and performed weekly access log reviews for high-risk accounts.",
          },
        ],
      },
    ],
    results: [
      {
        text: "온보딩·오프보딩 접근 관리 시간이 기존 대비 약 70% 단축되었습니다.",
        textEn: "Onboarding/offboarding access management time was reduced by approximately 70%.",
      },
      {
        text: "분산된 접속 로그가 방화벽 단일 지점으로 통합되어 실시간 모니터링 및 감사 대응이 용이해졌습니다.",
        textEn: "Fragmented access logs were consolidated to a single firewall, making real-time monitoring and audit responses significantly easier.",
      },
    ],
    lessons: [
      {
        text: "초기부터 그룹 구조를 설계하는 것이 운영 효율과 보안 모두에 핵심임을 실감했습니다.",
        textEn: "Experienced firsthand that designing group structures from the start is key to both operational efficiency and security at scale.",
      },
    ],
  },
  {
    id: "edr-ngav",
    title: "EDR/NGAV 도입 및 운영 안정화",
    titleEn: "EDR/NGAV Deployment & Operational Stabilization",
    background: [
      {
        text: "시그니처 기반 AV로 탐지되지 않는 Fileless 공격, 랜섬웨어 변종 등 고도화된 위협에 대응하기 위해 행위 기반 탐지 솔루션 도입이 필요했습니다.",
        textEn: "Advanced threats undetectable by signature-based AV — including Fileless attacks and ransomware variants — necessitated deployment of a behavior-based detection solution.",
      },
    ],
    role: [
      {
        title: "솔루션 선정 및 도입 전략",
        titleEn: "Solution Selection & Deployment Strategy",
        items: [
          {
            text: "KISA CERT 기반 보안 체크리스트 초안 작성과 솔루션 비교 매트릭스를 작성하고, EDR 솔루션 선정 및 도입 순서 협의에 참여했습니다.",
            textEn: "Drafted a KISA CERT-based security checklist and solution comparison matrix, and participated in team coordination for EDR solution selection and deployment sequencing.",
          },
        ],
      },
      {
        title: "오탐 대응 프로세스 구축",
        titleEn: "False Positive Response Process",
        items: [
          {
            text: "초기 배포 시 개발 소스 파일이 랜섬웨어로 오탐·격리되는 문제가 발생했습니다. 개발팀과 협업하여 MD5 해시 검증 기반 오탐 식별 절차를 수립했습니다.",
            textEn: "Development source files were falsely quarantined as ransomware during initial rollout. Collaborated with the dev team to build an MD5 hash verification procedure for false positive identification.",
            subItems: [
              {
                text: "정상 파일 Whitelist 등록 후 개발팀과 Prevent 모드 전환 검증을 완료하여 운영 안정화를 달성했습니다.",
                textEn: "Completed stabilization by validating the Prevent mode transition with the dev team after registering legitimate files to the whitelist.",
              },
            ],
          },
        ],
      },
      {
        title: "일일 보안 모니터링 운영",
        titleEn: "Daily Security Monitoring Operations",
        items: [
          {
            text: "이벤트 트리아지·리포트 작성·직원 문의 대응 등 일일 모니터링 업무를 단독 수행하고, 주간 Full Scan 스케줄링 및 보안 교육 자료를 배포했습니다.",
            textEn: "Solely responsible for daily monitoring operations (event triage, report writing, employee inquiry), plus weekly Full Scan scheduling and security training material distribution.",
          },
        ],
      },
    ],
    results: [
      {
        text: "Fileless 공격, 랜섬웨어 변종 등 기존 AV로 탐지 불가한 위협을 선제 차단하여 보안 사고 0건을 유지했습니다.",
        textEn: "Proactively blocked threats undetectable by legacy AV — including Fileless attacks and novel ransomware — maintaining zero security incidents.",
      },
      {
        text: "Whitelist + MD5 검증 프로세스 수립 후 오탐 건수가 크게 감소하여 개발팀 업무가 중단 없이 안정화되었습니다.",
        textEn: "After establishing the Whitelist + MD5 verification process, false positive counts dropped significantly, enabling uninterrupted dev team operations.",
      },
    ],
    lessons: [
      {
        text: "보안 솔루션 도입 시 운영 효율과 비즈니스 영향을 함께 고려해야 함을 배웠습니다. MD5 기반 오탐 절차 수립은 보안 정책이 운영 현실과 긴밀히 통합되어야 함을 실무로 익힌 경험이었습니다.",
        textEn: "Learned the importance of balancing operational efficiency and business impact when deploying security solutions. Building the MD5-based false positive process was a firsthand lesson that security policies must be tightly integrated with operational realities.",
      },
    ],
  },
];