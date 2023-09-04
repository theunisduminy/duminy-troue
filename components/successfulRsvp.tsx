import styles from '@/../styles/Form.module.css';
import LinkCards from './linkCards';

export default function successfulRsvp(guestDetails: Record<string, any>, language: 'afr' | 'eng') {
  const personalMessage =
    guestDetails.data.guest.message !== 'geen'
      ? guestDetails.data.guest.message
      : 'Dankie, ons sien baie uit om saam jou ons groot dag te vier!';

  return (
    <div className={styles.personalMessage}>
      <label>{personalMessage}</label>
      {/* Cards for linking to other pages */}
      {LinkCards({ language })}
    </div>
  );
}
