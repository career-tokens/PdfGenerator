import { ReactNode } from 'react';

export interface Person {
  id: number;
  name: string;
    designation: ReactNode[];
  image: string;
  link: string;
}