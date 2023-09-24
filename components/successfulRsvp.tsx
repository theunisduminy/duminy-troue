import styles from '@/../styles/Form.module.css';
import LinkCards from './linkCards';
import { getTranslation } from '../lib/language';

export default function successfulRsvp(guestDetails: Record<string, any>, language: 'afr' | 'eng') {
  // variables
  const translation = getTranslation(language);
  const rsvpStatus = guestDetails.data.guest.rsvp;
  const personalMessage =
    guestDetails.data.guest.message !== 'geen'
      ? guestDetails.data.guest.message
      : translation.successfulRsvp;

  return (
    <div className={styles.personalMessage}>
      {rsvpStatus ? (
        <>
          <img src='images/green-check.png' alt='green check' className={styles.rsvpPic} />
          <label>{personalMessage}</label>
        </>
      ) : (
        <>
          <img src='images/red-check.png' alt='red check' className={styles.rsvpPic} />
          <label>{translation.unSuccessfulRsvp}</label>
        </>
      )}

      {/* Cards for linking to other pages */}
      {LinkCards({ language })}
    </div>
  );
}
