export interface Certification {
  name: string;
  nameEn: string;
  date: string;
  issuer: string;
  issuerEn: string;
  url?: string;
  highlight?: boolean;
  category: "security" | "kubernetes" | "general";
}

export interface Award {
  title: string;
  titleEn: string;
  issuer: string;
  issuerEn: string;
  date: string;
  highlight?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect — Professional",
    nameEn: "AWS Certified Solutions Architect — Professional",
    date: "2024.06.",
    issuer: "Amazon Web Services",
    issuerEn: "Amazon Web Services",
    url: "https://www.credly.com/example/aws-sap",
    highlight: true,
    category: "general",
  },
  {
    name: "AWS Certified Developer — Associate",
    nameEn: "AWS Certified Developer — Associate",
    date: "2023.03.",
    issuer: "Amazon Web Services",
    issuerEn: "Amazon Web Services",
    category: "general",
  },
  {
    name: "Certified Kubernetes Administrator",
    nameEn: "Certified Kubernetes Administrator",
    date: "2023.09.",
    issuer: "CNCF",
    issuerEn: "CNCF",
    category: "kubernetes",
  },
  {
    name: "Certified Kubernetes Application Developer",
    nameEn: "Certified Kubernetes Application Developer",
    date: "2024.01.",
    issuer: "CNCF",
    issuerEn: "CNCF",
    category: "kubernetes",
  },
  {
    name: "정보처리기사",
    nameEn: "Information Processing Engineer",
    date: "2015.05.",
    issuer: "한국산업인력공단",
    issuerEn: "HRD Korea",
    category: "general",
  },
  {
    name: "SQLD",
    nameEn: "SQL Developer",
    date: "2016.09.",
    issuer: "한국데이터산업진흥원",
    issuerEn: "Korea Data Agency",
    category: "general",
  },
  {
    name: "정보보안기사",
    nameEn: "Information Security Engineer",
    date: "2017.06.",
    issuer: "한국산업인력공단",
    issuerEn: "HRD Korea",
    category: "security",
  },
];

export const awards: Award[] = [
  {
    title: "사내 기술 혁신상",
    titleEn: "Internal Tech Innovation Award",
    issuer: "테크코프",
    issuerEn: "TechCorp",
    date: "2023.12.",
  },
  {
    title: "해커톤 대상",
    titleEn: "Hackathon Grand Prize",
    issuer: "한국소프트웨어산업협회",
    issuerEn: "Korea Software Industry Association",
    date: "2021.11.",
  },
  {
    title: "오픈소스 컨트리뷰톤 우수상",
    titleEn: "Open Source Contributhon Excellence Award",
    issuer: "정보통신산업진흥원",
    issuerEn: "NIPA",
    date: "2019.12.",
  },
];
