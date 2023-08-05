import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import successfulRsvp from '../components/successfulRsvp';
import Header from '../components/header';

export interface submitMainGuestProps {
  submitMainGuest: (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => void;
}

export default function Rsvp() {
  const [mainGuestSubmitted, setMainGuestSubmitted] = useState(false);
  // const [dietOptionSubmitted, setDietOptionSubmitted] = useState(false);
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});

  const submitMainGuest = (isSubmitted: boolean, guestData: Record<string, any>) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
    // setDietOptionSubmitted(isVegetarian);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
