import { ReactNode } from "react";

export interface NavItem {
  label: string;
  id: string;
}

export type GraphicType = 'cube' | 'rings' | 'planes';

export interface Capability {
  id: string;
  title: string;
  desc: string;
  category: string;
  graphic: GraphicType;
}

export interface NaicsCode {
  code: string;
  title: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
}