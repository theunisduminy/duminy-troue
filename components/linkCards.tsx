import styles from '@/../styles/Card.module.css';

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
  return (
    <div className={styles.grid}>
      {showBackToHome && (
        <a href='/' className={styles.card}>
          <h3>Take me home &rarr;</h3>
          <p>Gaan terug na daai eerste blad. Die Home page. Jy weet mos.</p>
        </a>
      )}
      {/* RSVP */}
      {showRsvp && (
        <a href='/rsvp' className={styles.card}>
          <h3>RSVP &rarr;</h3>
          <p>Laat weet of jy en jou metgeselle sal kan kom.</p>
        </a>
      )}

      {/* Naweekplan */}
      {showNaweekplan && (
        <a href='/naweekplan' className={styles.card}>
          <h3>Naweekplan &rarr;</h3>
          <p>Waar, wanneer, hoe laat en wat 'n mens dra na so ding.</p>
        </a>
      )}

      {/* Registry */}
      {showRegistry && (
        <a href='/registry' className={styles.card}>
          <h3>Registry &rarr;</h3>
          <p>Goed wat Mignon sê ons nodig het, blykbaar.</p>
        </a>
      )}
    </div>
  );
}
