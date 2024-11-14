import { MutableRefObject } from 'react';

export interface GameLayerProps {
  wagonetCoords: { x: number; y: number };
  wagonetRef: MutableRefObject<any>;
  pictureFirst: string;
  pictureSecond: string;
}
