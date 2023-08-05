import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/header';
import dayPlan from '../components/dayInfo';

export default function Naweekplan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {Header('Naweekplan')}
        <div className={styles.vl}></div>

        {/* Vrydag */}
        {dayPlan({
          date: 'Vrydag, 22 Maart 2024',
          copy: "Dis 'n langnaweek - sit verlof in! Almal kan in boek by hulle akkomodasie van 15:00 af en die aand 'n heerlike spit geniet. Alhoewel ons in die Karoo is, gaan ons nogsteeds Heidelberg lam eet.",
        })}

        {/* Saterdag */}
        {dayPlan({ date: 'Saterdag, 23 Maart 2024', copy: 'hello' })}

        {/* Sonday */}
        {dayPlan({ date: 'Sondag, 24 Maart 2024', copy: 'hello' })}
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
