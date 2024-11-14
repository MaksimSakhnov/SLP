import type { ResultProps } from '@/components/Result/Result.type';
import styles from './Result.module.scss';

export default function Result({
  setOpenResult,
  statisticFirst,
  statisticSecond,
  choice,
}: ResultProps) {
  const statistic = choice === 'noChange' ? statisticFirst : statisticSecond;
  const percentage = Math.round(
    (statistic / (statisticSecond + statisticFirst)) * 100,
  );
  return (
    <div className={styles.result}>
      <div className={styles.result_description}>
        {percentage}% сделали такой же выбор, как и вы!
      </div>
      <button className={styles.btn} onClick={() => setOpenResult(false)}>
        Далее!
      </button>
    </div>
  );
}
