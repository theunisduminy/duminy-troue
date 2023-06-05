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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <h3>
          <i className='fa fa-black-tie'></i> Drag
        </h3>
      </div>
    </div>
  );
}
