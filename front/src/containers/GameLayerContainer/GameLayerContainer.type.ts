import type { DirectionType } from '@/shared/types';

export interface GameLayerContainerProps {
  direction: null | 'change' | 'noChange';
  setIsMoving: (isMoving: boolean) => void;
  setOpenResult: (isOpen: boolean) => void;
  setDirection: (direction: DirectionType) => void;
  pictureFirst: string;
  pictureSecond: string;
}
