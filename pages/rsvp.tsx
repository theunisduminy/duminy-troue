import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import successfulRsvp from '../components/successfulRsvp';
import Header from '../components/header';
import { getTranslation } from '../lib/language';
import useLanguageStore from '../lib/store';

export interface submitMainGuestProps {
  submitMainGuest: (
    isSubmitted: boolean,
    guestData: Record<string, any>,
    isWithSomeone: boolean,
  ) => void;
}

export default function Rsvp() {
  const [mainGuestSubmitted, setMainGuestSubmitted] = useState(false);
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});
  const { language, setLanguage } = useLanguageStore((state) => {
    return {
      language: state.language,
      setLanguage: state.setLanguage,
    };
  });

  const handleLanguageChange = () => {
    const newLanguage = language === 'eng' ? 'afr' : 'eng';
    setLanguage(newLanguage);
  };

  const translation = getTranslation(language);

  const submitMainGuest = (isSubmitted: boolean, guestData: Record<string, any>) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
  };

  return (
    <>
      <main>
        <button onClick={handleLanguageChange}>{translation.button}</button>
        {Header(translation.naweek_bywoon, true)}
        <div>
          {/* RSVP Form for main guest */}
          {!mainGuestSubmitted && <RsvpForm language={language} onSubmit={submitMainGuest} />}
          {/* Successful RSVP page if no plus one */}
          {mainGuestSubmitted && successfulRsvp(guestDetails, language)}
        </div>
      </main>
      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </>
  );
}
