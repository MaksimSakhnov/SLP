import type { MutableRefObject } from 'react';

export interface RectangleProps {
  x: number;
  y: number;
  width: number;
  height: number;
  customRef?: MutableRefObject<any>;
}
