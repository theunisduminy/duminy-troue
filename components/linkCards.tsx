import styles from '@/../styles/Card.module.css';

import { getTranslation } from '../lib/language';

interface LinkCardsProps {
  showRsvp?: boolean;
  showNaweekplan?: boolean;
  showRegistry?: boolean;
  showBackToHome?: boolean;
  language: 'afr' | 'eng';
}

export default function LinkCards({
  showRsvp = true,
  showNaweekplan = true,
  showRegistry = true,
  showBackToHome = true,
  language,
}: LinkCardsProps) {
  const translation = getTranslation(language);

  return (
    <div className={styles.grid}>
      {/* Back to Home */}
      {showBackToHome && (
        <a href='/' className={styles.card}>
          <h3>{translation.home_header} &rarr;</h3>
          <p>{translation.home_sub}</p>
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
