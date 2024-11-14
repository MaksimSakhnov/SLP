import type { DirectionType } from '@/shared/types';

export interface ActionsProps {
  isMoving: boolean;
  makeChoice: (direction: DirectionType) => void;
  nextLevel: () => void;
  disabledNextLevel: boolean;
}
