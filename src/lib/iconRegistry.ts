import {
  Github,
  Globe,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import type { IconRegistry, PortfolioIconName } from "@/domain/portfolio/types";

const ICON_REGISTRY: IconRegistry = {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Globe,
};

export function resolvePortfolioIcon(name: PortfolioIconName): LucideIcon {
  return ICON_REGISTRY[name];
}
