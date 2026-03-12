import type { LucideIcon } from "lucide-react";

export type PortfolioIconName =
  | "Mail"
  | "Github"
  | "Twitter"
  | "Linkedin"
  | "Globe";

export type TimelinePosition = "top" | "bottom";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  github: string;
  live: string;
  accentGradient: string;
  gridSpan: string;
}

export interface TimelineEntry {
  id: number;
  position: TimelinePosition;
  title: string;
  subtitle: string;
  description: string;
  achievements?: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  timestamp: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: PortfolioIconName;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface SocialLink {
  icon: PortfolioIconName;
  href: string;
  label: string;
}

export interface FooterConfig {
  initials: string;
  subtitle: string;
  copyright: string;
}

export interface SectionLabels {
  selectedWorks: {
    title: string;
    viewAllLabel: string;
  };
  experience: {
    title: string;
  };
  insights: {
    title: string;
    viewAllLabel: string;
  };
  contact: {
    title: string;
  };
}

export interface PortfolioContent {
  projects: Project[];
  timeline: TimelineEntry[];
  blog: BlogPost[];
  contactLinks: ContactLink[];
  footerLinks: FooterLink[];
  socialLinks: SocialLink[];
  footer: FooterConfig;
  sections: SectionLabels;
}

export type IconRegistry = Record<PortfolioIconName, LucideIcon>;
