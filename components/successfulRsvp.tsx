import styles from '@/../styles/Form.module.css';

import LinkCards from './linkCards';

export default function successfulRsvp(guestDetails: Record<string, any>) {
  const personalMessage =
    guestDetails.data.guest.message !== null
      ? guestDetails.data.guest.message
      : 'Dankie, ons sien uit om saam jou die groot dag te vier!';

  return (
    <div>
      {
        <div className={styles.personalMessage}>
          <label>{personalMessage}</label>
          {/* Cards for linking to other pages */}
          {LinkCards({ showRsvp: false })}
        </div>
      }
    </div>
  );
}
