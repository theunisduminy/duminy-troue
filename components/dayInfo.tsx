import styles from '@/../styles/Plan.module.css';

interface DayPlanProps {
  date?: string;
  copy: string;
}

export default function dayPlan({ date, copy }: DayPlanProps) {
  return (
    <div className={styles.dayInfo}>
      <div className={styles.dayBox}>
        <h2>
          <i className='fa fa-calendar-check-o'></i> {date}
        </h2>
        <p>{copy}</p>
        {/* <h3>
          <i className='fa fa-black-tie'></i> Drag
        </h3> */}
      </div>
    </div>
  );
}
