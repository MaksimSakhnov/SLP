import type { MutableRefObject } from 'react';

export interface WagonetProps {
  x: number;
  y: number;
  width: number;
  height: number;
  customRef?: MutableRefObject<any>;
}
