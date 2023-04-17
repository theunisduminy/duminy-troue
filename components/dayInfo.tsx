import styles from '@/../styles/Plan.module.css';

interface DayPlanProps {
  date?: string;
}

export default function dayPlan({ date }: DayPlanProps) {
  return (
    <div className={styles.dayInfo}>
      <div className={styles.dayBox}>
        <h2>
          <i className='fa fa-calendar-check-o'></i> {date}
        </h2>
      </div>
    </div>
  );
}
