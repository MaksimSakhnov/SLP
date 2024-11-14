import type { ActionsProps } from '@/components/Actions/Actions.type';
import styles from './Actions.module.scss';

export default function Actions({
  makeChoice,
  isMoving,
  disabledNextLevel,
  nextLevel,
}: ActionsProps) {
  return (
    <div className={styles.btns_block}>
      <button
        disabled={isMoving}
        className={styles.btn}
        onClick={() => makeChoice('change')}
      >
        Ехать вниз
      </button>
      <button
        disabled={isMoving}
        className={styles.btn}
        onClick={() => makeChoice('noChange')}
      >
        Ехать вверх
      </button>
      <button
        disabled={disabledNextLevel}
        className={styles.btn}
        onClick={nextLevel}
      >
        Далее
      </button>
    </div>
  );
}
