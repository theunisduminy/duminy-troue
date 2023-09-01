import styles from '@/../styles/Card.module.css';
import { useGenerationStore } from '../lib/language';
import { getTranslation } from '../lib/language';
import useStore from '../lib/useStore';

interface LinkCardsProps {
  showRsvp?: boolean;
  showNaweekplan?: boolean;
  showRegistry?: boolean;
  showBackToHome?: boolean;
}

export default function LinkCards({
  showRsvp = true,
  showNaweekplan = true,
  showRegistry = true,
  showBackToHome = true,
}: LinkCardsProps) {
  const lang = useStore(useGenerationStore, (state) => state.language);
  // const { language } = useGenerationStore();

  const translation = getTranslation(lang);

  return (
    <div className={styles.grid}>
      {/* Back to Home */}
      {showBackToHome && (
        <a href='/' className={styles.card}>
          <h3>Tuis &rarr;</h3>
          <p>Gaan terug na die eerste blad - die Home page.</p>
        </a>
      )}

      {/* RSVP */}
      {showRsvp && (
        <a href='/rsvp' className={styles.card}>
          <h3>RSVP &rarr;</h3>
          <p>{translation.rsvp_sub}</p>
        </a>
      )}

      {/* Naweekplan */}
      {showNaweekplan && (
        <a href='/naweekplan' className={styles.card}>
          <h3>{translation.naweek_plan_header} &rarr;</h3>
          <p>{translation.naweek_plan_sub}</p>
        </a>
      )}

      {/* Registry */}
      {showRegistry && (
        <a href='/registry' className={styles.card}>
          <h3>{translation.geskenk_idees_header} &rarr;</h3>
          <p>{translation.geskenk_idees_sub}</p>
        </a>
      )}
    </div>
  );
}
