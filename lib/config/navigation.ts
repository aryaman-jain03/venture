import {
  LayoutDashboard,
  Lightbulb,
  Target,
  Zap,
  BarChart3,
  FileText,
  Settings,
  ShieldCheck,
  CreditCard,
  LucideIcon
} from "lucide-react";

export interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  locked?: boolean;
}

export const mainNavItems: NavItem[] = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Module 1: Validation", href: "/modules/1", icon: Lightbulb },
  { name: "Module 2: Business", href: "/modules/2", icon: Target, locked: true },
  { name: "Module 3: MVP", href: "/modules/3", icon: Zap, locked: true },
  { name: "Module 4: Pitch", href: "/modules/4", icon: BarChart3, locked: true },
  { name: "Reports", href: "/reports", icon: FileText },
];

export const bottomNavItems: NavItem[] = [
  { name: "Subscription", href: "/subscription", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Admin", href: "/admin", icon: ShieldCheck },
];
