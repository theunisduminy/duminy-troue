import styles from '@/../styles/Form.module.css';
import { useGenerationStore } from '../lib/language';
import { getTranslation } from '../lib/language';
import useStore from '../lib/useStore';
import LinkCards from './linkCards';

export default function successfulRsvp(guestDetails: Record<string, any>) {
  // const lang = useStore(useGenerationStore, (state) => state.language);

  // const { language, setLanguage } = useGenerationStore();
  // console.log(lang);

  // const translation = getTranslation(lang);
  const personalMessage =
    guestDetails.data.guest.message !== 'geen'
      ? guestDetails.data.guest.message
      : 'Dankie, ons sien baie uit om saam jou ons groot dag te vier!';

  return (
    <div className={styles.personalMessage}>
      <label>{personalMessage}</label>
      {/* Cards for linking to other pages */}
      {LinkCards({})}
    </div>
  );
}
