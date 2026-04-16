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
    name: "AWS Certified Security Specialty",
    nameEn: "AWS Certified Security Specialty",
    date: "2026.03.",
    issuer: "Amazon Web Services",
    issuerEn: "Amazon Web Services",
    highlight: true,
    category: "security",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    nameEn: "AWS Certified Cloud Practitioner",
    date: "2024.04.",
    issuer: "Amazon Web Services",
    issuerEn: "Amazon Web Services",
    category: "general",
  },
  {
    name: "리눅스마스터 2급",
    nameEn: "Linux Master Level 2",
    date: "2024.06.",
    issuer: "한국정보통신인력개발센터",
    issuerEn: "KAIT",
    category: "general",
  },
  {
    name: "네트워크관리사 2급",
    nameEn: "Network Administrator Level 2",
    date: "2023.12.",
    issuer: "한국정보통신자격협회",
    issuerEn: "ICQA",
    category: "general",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    nameEn: "Microsoft Certified: Azure Fundamentals",
    date: "2022.08.",
    issuer: "Microsoft",
    issuerEn: "Microsoft",
    category: "general",
  },
  {
    name: "전기기능사",
    nameEn: "Craftsman Electricity",
    date: "2020.08.",
    issuer: "한국산업인력공단",
    issuerEn: "HRD Korea",
    category: "general",
  },
  {
    name: "정보기기운용기능사",
    nameEn: "Craftsman Information Equipment Operation",
    date: "2019.04.",
    issuer: "한국산업인력공단",
    issuerEn: "HRD Korea",
    category: "general",
  },
];

export const awards: Award[] = [
  {
    title: "2019 대전시 기능경기대회 IT네트워크시스템 - 은메달",
    titleEn: "2019 Daejeon City Skills Competition IT Network Systems - Silver Medal",
    issuer: "한국산업인력공단",
    issuerEn: "HRD Korea",
    date: "2019.04.",
    highlight: true,
  },
  {
    title: "우수숙련인 장학 증서",
    titleEn: "Excellence Skilled Person Scholarship Certificate",
    issuer: "(사)기능한국인회",
    issuerEn: "Korea Skilled Person Association",
    date: "2019.12.",
    highlight: false,
  },
];
