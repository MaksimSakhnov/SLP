import { DirectionType } from '@/shared/types';

export interface ResultProps {
  setOpenResult: (isOpen: boolean) => void;
  statisticFirst: number;
  statisticSecond: number;
  choice: DirectionType;
}
