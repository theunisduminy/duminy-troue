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
        {dayPlan({ date: 'Vrydag, 22 Maart 2024' })}

        {/* Saterdag */}
        {dayPlan({ date: 'Saterdag, 23 Maart 2024' })}

        {/* Sonday */}
        {dayPlan({ date: 'Sondag, 24 Maart 2024' })}
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
