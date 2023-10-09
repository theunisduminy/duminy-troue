import styles from '@/../styles/Form.module.css';
import LinkCards from './LinkCards';
import { getTranslation } from '../lib/language';

const SuccessfulRsvp: React.FC = (
  guestDetails: Record<string, any>,
  language: 'afr' | 'eng',
) => {
  // variables
  const translation = getTranslation(language);
  const rsvpStatus = guestDetails.data.guest.rsvp;
  const personalMessage =
    guestDetails.data.guest.message !== 'geen'
      ? guestDetails.data.guest.message
      : translation.successfulRsvp;

  console.log(rsvpStatus);

  return (
    <div className={styles.personalMessage}>
      {rsvpStatus ? (
        <>
          <label className='text-[#102135]'>{personalMessage}</label>
        </>
      ) : (
        <>
          <label className='text-[#102135]'>
            {translation.unSuccessfulRsvp}
          </label>
        </>
      )}

      {/* Cards for linking to other pages */}
      {LinkCards({ language })}
    </div>
  );
};

export default SuccessfulRsvp;
