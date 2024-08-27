// src/types/componentTypes.ts
import { ReactNode } from 'react';

export interface HeaderProps {
  name: string;
  customerId: string;
  onNavToggle: () => void;
  onHamToggle: () => void;
  isNavOpen?: boolean;
}