import styles from '@/../styles/Form.module.css';
import homeStyles from '@/../styles/Home.module.css';

export default function successfulRsvp(guestDetails: Record<string, any>, name: string) {
  const personalMessage =
    guestDetails.data.guest.message !== null
      ? guestDetails.data.guest.message
      : 'Dankie, ons sien uit om saam jou die groot dag te vier!';

  return (
    <div>
      {
        <div className={styles.personalMessage}>
          <label>{personalMessage}</label>
          <div className={homeStyles.grid}>
            <a href='/' className={homeStyles.card}>
              <h3>Take me home &rarr;</h3>
              <p>Gaan terug na daai eerste blad. Die Home page. Jy weet mos.</p>
            </a>

            <a href='https://nextjs.org/learn' className={homeStyles.card}>
              <h3>Registry &rarr;</h3>
              <p>Goed wat Mignon sê ons nodig het, blykbaar.</p>
            </a>
          </div>
        </div>
      }
    </div>
  );
}
