import { Menu, Moon, Sun, X, type LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  menu: Menu,
  moon: Moon,
  sun: Sun,
  close: X,
} as const;
