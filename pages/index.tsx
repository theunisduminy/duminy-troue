import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useGenerationStore } from '../lib/language';
import { getTranslation } from '../lib/language';
import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import LinkCards from '../components/linkCards';
import Header from '../components/header';

export default function Home() {
  const { language, setLanguage } = useGenerationStore();

  const handleLanguageChange = () => {
    const newLanguage = language === 'eng' ? 'afr' : 'eng';
    setLanguage(newLanguage);
  };

  console.log(language);

  const translation = getTranslation(language);

  return (
    <div className={styles.container}>
      <br></br>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {/* Page header */}
        <button onClick={handleLanguageChange}>English please!</button>
        {Header(translation.home_header)}

        <div className={styles.homePage}>
          {/* subTitle */}
          <p className={styles.subtitle}>22-24 {translation.month}, 2024</p>

          {/* Cards for linking to other pages */}
          {LinkCards({ showBackToHome: false, translation })}

          {/* Bottom section of the page */}
          <div className={styles.vl}></div>
          <p className={styles.description}>
            {translation.waar_die_troue_is_1}{' '}
            <a href='https://www.google.com/maps/place/Lord+Milner+Hotel+(Matjiesfontein)/@-33.2310257,20.5799933,17z/data=!3m1!4b1!4m9!3m8!1s0x1dd3110f98e906e5:0x40d4cb7334e175dd!5m2!4m1!1i2!8m2!3d-33.2310302!4d20.582182!16s%2Fg%2F1tc_hj29'>
              <strong>Matjiesfontein</strong>
            </a>{' '}
            {translation.waar_die_troue_is_2}
          </p>
        </div>
      </main>
      {/* Footer element */}
      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
