// types/navbar.ts
import { ReactNode } from "react";


export interface NavItem {
  label: string;
  path: string;
  icon: ReactNode;   // Inline SVGs
}
