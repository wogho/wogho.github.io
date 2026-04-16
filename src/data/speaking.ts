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

export const talks: Talk[] = [];

export const communities: Community[] = [
  {

    role: "컨퍼런스 참여",
    roleEn: "Conference Attendee",
    organization: "AWS Summit Seoul 2025",
    organizationEn: "AWS Summit Seoul 2025",
    period: "2025.05.",
    periodEn: "May 2025",
    active: false,
  },
];
