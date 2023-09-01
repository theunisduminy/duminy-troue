import Head from 'next/head';
import { useState } from 'react';
// import { useGenerationStore } from '../lib/language';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import successfulRsvp from '../components/successfulRsvp';
import Header from '../components/header';
import useStore from '../lib/useStore';

export interface submitMainGuestProps {
  submitMainGuest: (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => void;
}

export default function Rsvp() {
  // const { language, setLanguage } = useGenerationStore();
  const [mainGuestSubmitted, setMainGuestSubmitted] = useState(false);
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});

  // const lang: 'afr' | 'eng' | undefined = useStore(useGenerationStore, (state) => state.language);

  // const handleLanguageChange = () => {
  //   const newLanguage = language === 'eng' ? 'afr' : 'eng';
  //   setLanguage(newLanguage);
  // };

  const submitMainGuest = (isSubmitted: boolean, guestData: Record<string, any>) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <button onClick={handleLanguageChange}>English please!</button> */}
      <button>English please!</button>

      <main>
        {Header('Laat weet of jy die naweek sal kan bywoon.', false)}
        <div>
          {/* RSVP Form for main guest */}
          {!mainGuestSubmitted && <RsvpForm onSubmit={submitMainGuest} />}
          {/* Successful RSVP page if no plus one */}
          {mainGuestSubmitted && successfulRsvp(guestDetails)}
        </div>
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
