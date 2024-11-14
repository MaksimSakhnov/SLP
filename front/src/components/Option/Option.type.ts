import type { MutableRefObject } from 'react';

export interface OptionProps {
  x: number;
  y: number;
  width: number;
  height: number;
  url: string;
  customRef?: MutableRefObject<any>;
}
