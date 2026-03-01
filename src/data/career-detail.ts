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
    id: "microservices",
    title: "마이크로서비스 아키텍처 전환",
    titleEn: "Microservices Architecture Migration",
    background: [
      {
        text: "테크코프의 핵심 서비스는 모놀리식 아키텍처로 구축되어 있었으며, 사용자 수가 급증하면서 확장성과 배포 속도에 심각한 병목이 발생했습니다.",
        textEn:
          "TechCorp's core service was built on a monolithic architecture, and rapid user growth created severe bottlenecks in scalability and deployment speed.",
      },
      {
        text: "단일 코드베이스에서 40명 이상의 엔지니어가 동시에 작업하면서 코드 충돌과 배포 지연이 빈번하게 발생했고, 주간 배포가 2주에 1회로 지연되는 상황이었습니다.",
        textEn:
          "With 40+ engineers working on a single codebase simultaneously, code conflicts and deployment delays were frequent, with weekly deployments slipping to biweekly.",
      },
      {
        text: "비즈니스 성장을 지원하기 위해 서비스 분리와 독립적 배포가 가능한 마이크로서비스 아키텍처로의 전환을 최우선 과제로 설정했습니다.",
        textEn:
          "To support business growth, migrating to a microservices architecture enabling service isolation and independent deployments was set as the top priority.",
      },
    ],
    role: [
      {
        title: "아키텍처 설계",
        titleEn: "Architecture Design",
        items: [
          {
            text: "도메인 분석을 통해 서비스 경계를 정의하고, 12개 마이크로서비스로 분리하는 로드맵을 수립했습니다.",
            textEn:
              "Defined service boundaries through domain analysis and established a roadmap for decomposition into 12 microservices.",
            subItems: [
              {
                text: "DDD(Domain-Driven Design) 원칙을 적용하여 Bounded Context를 식별하고, 각 서비스의 책임 범위를 명확히 정의했습니다.",
                textEn:
                  "Applied DDD principles to identify Bounded Contexts and clearly defined each service's responsibility scope.",
              },
              {
                text: "서비스 간 데이터 일관성을 보장하기 위해 Saga 패턴과 이벤트 소싱 전략을 설계했습니다.",
                textEn:
                  "Designed Saga patterns and event sourcing strategies to ensure data consistency across services.",
              },
            ],
          },
          {
            text: "이벤트 드리븐 아키텍처를 기반으로 서비스 간 비동기 통신 체계를 구축했습니다.",
            textEn:
              "Built an asynchronous inter-service communication framework based on event-driven architecture.",
            subItems: [
              {
                text: "Apache Kafka를 메시지 브로커로 도입하고, 이벤트 스키마 레지스트리를 구축하여 서비스 간 계약을 관리했습니다.",
                textEn:
                  "Introduced Apache Kafka as the message broker and built an event schema registry to manage inter-service contracts.",
              },
              {
                text: "Dead Letter Queue와 재시도 메커니즘을 구현하여 메시지 처리 신뢰성을 99.9%로 향상시켰습니다.",
                textEn:
                  "Implemented Dead Letter Queue and retry mechanisms, improving message processing reliability to 99.9%.",
              },
            ],
          },
        ],
      },
      {
        title: "점진적 마이그레이션",
        titleEn: "Incremental Migration",
        items: [
          {
            text: "Strangler Fig 패턴을 적용하여 무중단으로 점진적 마이그레이션을 수행했습니다.",
            textEn:
              "Applied the Strangler Fig pattern to perform zero-downtime incremental migration.",
            subItems: [
              {
                text: "API Gateway를 통한 트래픽 라우팅으로 신구 시스템 간 점진적 전환을 구현했습니다.",
                textEn:
                  "Implemented gradual transition between old and new systems via API Gateway traffic routing.",
              },
              {
                text: "각 서비스별 카나리 배포 전략을 수립하여 리스크를 최소화했습니다.",
                textEn:
                  "Established canary deployment strategies per service to minimize risk.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "6개월에 걸친 점진적 마이그레이션을 통해 서비스 다운타임 없이 12개 마이크로서비스로 성공적으로 전환했습니다.",
        textEn:
          "Successfully migrated to 12 microservices over 6 months with zero service downtime through incremental migration.",
      },
      {
        text: "배포 주기가 2주 1회에서 일 3회 이상으로 개선되었고, 개별 서비스의 독립적 배포가 가능해져 팀 생산성이 크게 향상되었습니다.",
        textEn:
          "Deployment frequency improved from biweekly to 3+ times daily, with independent service deployments significantly boosting team productivity.",
      },
      {
        text: "시스템 확장성이 개선되어 트래픽 급증 시에도 자동 스케일링으로 안정적인 서비스 운영이 가능해졌습니다.",
        textEn:
          "Improved system scalability enabled stable service operation through auto-scaling even during traffic spikes.",
      },
    ],
    lessons: [
      {
        text: "마이크로서비스 전환에서 가장 큰 도전은 기술적 복잡성이 아닌 팀 간 소통과 합의 도출이었습니다. 서비스 경계를 정의하는 과정에서 각 팀의 도메인 지식을 존중하면서도 전체 시스템의 일관성을 유지하는 균형점을 찾는 것이 핵심이었습니다.",
        textEn:
          "The biggest challenge in microservices migration was not technical complexity but inter-team communication and consensus building. The key was finding a balance between respecting each team's domain knowledge and maintaining overall system consistency when defining service boundaries.",
      },
      {
        text: "점진적 마이그레이션 전략의 중요성을 체감했습니다. Big Bang 방식 대신 Strangler Fig 패턴을 선택함으로써 리스크를 관리하면서도 비즈니스 연속성을 보장할 수 있었고, 각 단계에서 얻은 학습을 다음 단계에 반영할 수 있었습니다.",
        textEn:
          "Experienced the importance of incremental migration strategy firsthand. Choosing the Strangler Fig pattern over a Big Bang approach allowed us to manage risk while ensuring business continuity, and apply learnings from each phase to the next.",
      },
    ],
  },
  {
    id: "performance",
    title: "대규모 트래픽 성능 최적화",
    titleEn: "Large-Scale Traffic Performance Optimization",
    background: [
      {
        text: "서비스 사용자가 월 100만 명을 넘어서면서 피크 시간대 응답 지연과 간헐적 서비스 장애가 발생하기 시작했습니다.",
        textEn:
          "As monthly users exceeded 1 million, response delays during peak hours and intermittent service outages began occurring.",
      },
      {
        text: "데이터베이스 쿼리 지연, 비효율적인 캐싱, 정적 자산 최적화 부족 등 여러 병목 지점이 복합적으로 작용하고 있었습니다.",
        textEn:
          "Multiple bottlenecks including database query delays, inefficient caching, and lack of static asset optimization were compounding.",
      },
    ],
    role: [
      {
        title: "병목 분석 및 최적화",
        titleEn: "Bottleneck Analysis & Optimization",
        items: [
          {
            text: "APM 도구를 도입하여 전체 요청 경로의 성능을 가시화하고 병목 지점을 정밀 분석했습니다.",
            textEn:
              "Introduced APM tools to visualize performance across the entire request path and precisely analyze bottlenecks.",
            subItems: [
              {
                text: "Datadog APM을 도입해 서비스별 레이턴시, 에러율, 처리량을 실시간으로 모니터링하는 대시보드를 구축했습니다.",
                textEn:
                  "Deployed Datadog APM and built dashboards for real-time monitoring of per-service latency, error rates, and throughput.",
              },
              {
                text: "슬로우 쿼리 분석을 통해 상위 10개 쿼리를 최적화하여 평균 응답 시간을 40% 단축했습니다.",
                textEn:
                  "Optimized the top 10 slow queries through analysis, reducing average response time by 40%.",
              },
            ],
          },
          {
            text: "다층 캐싱 전략을 설계하고 구현하여 데이터베이스 부하를 크게 줄였습니다.",
            textEn:
              "Designed and implemented a multi-layer caching strategy, significantly reducing database load.",
            subItems: [
              {
                text: "Redis를 활용한 애플리케이션 레벨 캐싱과 CDN을 활용한 엣지 캐싱을 조합하여 초당 10,000 요청을 안정적으로 처리할 수 있는 환경을 구축했습니다.",
                textEn:
                  "Combined Redis application-level caching with CDN edge caching to reliably handle 10,000 requests per second.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "평균 API 응답 시간을 800ms에서 200ms로 75% 개선하고, P99 레이턴시를 3초에서 800ms로 단축했습니다.",
        textEn:
          "Improved average API response time by 75% from 800ms to 200ms, and reduced P99 latency from 3s to 800ms.",
      },
      {
        text: "데이터베이스 부하를 60% 감소시키고, 월간 인프라 비용을 30% 절감하는 성과를 달성했습니다.",
        textEn:
          "Achieved 60% reduction in database load and 30% reduction in monthly infrastructure costs.",
      },
    ],
    lessons: [
      {
        text: "성능 최적화는 측정 없이는 불가능하다는 것을 깊이 체감했습니다. 직감이 아닌 데이터에 기반한 의사결정이 효과적인 최적화의 핵심이며, APM 도구의 도입이 조직 전체의 성능 인식을 변화시키는 계기가 되었습니다.",
        textEn:
          "Deeply experienced that performance optimization is impossible without measurement. Data-driven rather than intuition-based decisions are key to effective optimization, and APM tool adoption transformed the entire organization's performance awareness.",
      },
      {
        text: "캐싱은 만능이 아니며, 캐시 무효화 전략이 캐싱 자체보다 더 중요하다는 것을 배웠습니다. 데이터 일관성과 성능 사이의 트레이드오프를 비즈니스 요구사항에 맞게 설계하는 능력을 키울 수 있었습니다.",
        textEn:
          "Learned that caching is not a silver bullet and that cache invalidation strategy is more important than caching itself. Developed the ability to design tradeoffs between data consistency and performance according to business requirements.",
      },
    ],
  },
  {
    id: "leadership",
    title: "개발 문화 및 팀 리더십",
    titleEn: "Engineering Culture & Team Leadership",
    background: [
      {
        text: "팀 규모가 5명에서 15명으로 성장하면서 코드 품질 유지, 지식 공유, 온보딩 효율성에 대한 체계적인 접근이 필요해졌습니다.",
        textEn:
          "As the team grew from 5 to 15 members, a systematic approach to maintaining code quality, knowledge sharing, and onboarding efficiency became necessary.",
      },
      {
        text: "기존에는 비공식적인 소통에 의존하던 개발 프로세스를 팀 규모에 맞게 체계화하고 확장 가능한 구조로 전환하는 것이 필요했습니다.",
        textEn:
          "The development process, previously relying on informal communication, needed to be systematized and transformed into a scalable structure appropriate for the team size.",
      },
    ],
    role: [
      {
        title: "코드 리뷰 및 품질 관리",
        titleEn: "Code Review & Quality Management",
        items: [
          {
            text: "체계적인 코드 리뷰 프로세스를 도입하고 팀 내 품질 문화를 정착시켰습니다.",
            textEn:
              "Introduced a systematic code review process and established a quality culture within the team.",
            subItems: [
              {
                text: "리뷰 가이드라인과 체크리스트를 작성하여 일관된 코드 리뷰 기준을 마련하고, PR 템플릿을 표준화했습니다.",
                textEn:
                  "Created review guidelines and checklists for consistent code review standards, and standardized PR templates.",
              },
              {
                text: "자동화된 린팅, 테스트, 보안 스캔을 CI 파이프라인에 통합하여 리뷰어의 부담을 줄이고 리뷰 품질을 높였습니다.",
                textEn:
                  "Integrated automated linting, testing, and security scans into the CI pipeline, reducing reviewer burden and improving review quality.",
              },
            ],
          },
        ],
      },
      {
        title: "멘토링 및 온보딩",
        titleEn: "Mentoring & Onboarding",
        items: [
          {
            text: "주니어 개발자 온보딩 프로그램을 설계하고 1:1 멘토링 체계를 구축했습니다.",
            textEn:
              "Designed a junior developer onboarding program and built a 1:1 mentoring system.",
            subItems: [
              {
                text: "4주간의 구조화된 온보딩 커리큘럼을 설계하여 신규 입사자의 첫 PR 기간을 평균 3주에서 1주로 단축했습니다.",
                textEn:
                  "Designed a structured 4-week onboarding curriculum, reducing new hire's first PR time from an average of 3 weeks to 1 week.",
              },
              {
                text: "주간 1:1 미팅과 분기별 성장 목표 설정을 통해 팀원의 기술적 성장을 지원하고 경력 개발을 도왔습니다.",
                textEn:
                  "Supported team members' technical growth and career development through weekly 1:1 meetings and quarterly growth goal setting.",
              },
            ],
          },
        ],
      },
    ],
    results: [
      {
        text: "코드 리뷰 프로세스 도입 후 프로덕션 버그 발생률이 45% 감소하고, 팀 내 지식 공유가 활성화되었습니다.",
        textEn:
          "After introducing the code review process, production bug rate decreased by 45% and knowledge sharing within the team was activated.",
      },
      {
        text: "온보딩 프로그램을 통해 신규 입사자의 적응 기간을 크게 단축하고, 팀 만족도 조사에서 멘토링 프로그램이 가장 높은 평가를 받았습니다.",
        textEn:
          "Significantly shortened new hire adaptation period through the onboarding program, with the mentoring program receiving the highest ratings in team satisfaction surveys.",
      },
    ],
    lessons: [
      {
        text: "개발 문화는 규칙이 아닌 공감을 통해 정착된다는 것을 배웠습니다. 코드 리뷰를 '검사'가 아닌 '학습의 기회'로 프레이밍하자 팀원들이 자발적으로 참여하기 시작했고, 이것이 지속 가능한 문화의 핵심이라는 것을 깨달았습니다.",
        textEn:
          "Learned that engineering culture is established through empathy, not rules. When code review was framed as a 'learning opportunity' rather than an 'inspection', team members began participating voluntarily — and I realized this is the key to sustainable culture.",
      },
      {
        text: "리더십은 기술적 역량만으로는 충분하지 않으며, 팀원 개개인의 성장에 대한 진정한 관심과 지원이 팀 전체의 성과를 이끄는 가장 강력한 동력이라는 것을 경험했습니다.",
        textEn:
          "Experienced that leadership is not sufficient with technical skills alone — genuine interest in and support for each team member's growth is the most powerful driver of overall team performance.",
      },
    ],
  },
];
