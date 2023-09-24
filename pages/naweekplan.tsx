import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/header';
import dayPlan from '../components/dayInfo';
import { useState } from 'react';
import { getTranslation } from '../lib/language';

export default function Naweekplan() {
  const [language, setLanguage] = useState<'afr' | 'eng'>('afr');

  const handleLanguageChange = () => {
    const newLanguage = language === 'eng' ? 'afr' : 'eng';
    setLanguage(newLanguage);
  };

  const translation = getTranslation(language);

  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <button onClick={handleLanguageChange}>{translation.button}</button>
        {Header('Naweekplan')}
        <div className={styles.vl}></div>

        {/* Vrydag */}
        {dayPlan({
          date: `${translation.vrydag.date}`,
          copy: `${translation.vrydag.copy}`,
        })}

        {/* Saterdag */}
        {dayPlan({
          date: `${translation.saterdag.date}`,
          copy: `${translation.saterdag.copy}`,
        })}

        {/* Sonday */}
        {dayPlan({
          date: `${translation.sondag.date}`,
          copy: `${translation.sondag.copy}`,
        })}
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
