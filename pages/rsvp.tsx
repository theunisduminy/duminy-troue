import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import ExtraGuest from '../components/extraGuestRsvp';
import successfulRsvp from '../components/successfulRsvp';
import Header from '../components/header';

export interface submitMainGuestProps {
  submitMainGuest: (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => void;
}

export default function Rsvp() {
  const [successfulRsvpForExtraGuests, setSuccessfulRsvpForExtraGuests] = useState(false);
  const [mainGuestSubmitted, setMainGuestSubmitted] = useState(false);
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});
  const [hasPlusOne, setHasPlusOne] = useState(false);

  const submitMainGuest = (isSubmitted: boolean, guestData: Record<string, any>, hasPlusOne: boolean) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
    setHasPlusOne(hasPlusOne);
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
          {mainGuestSubmitted && !hasPlusOne && successfulRsvp(guestDetails)}
          {/* Extra guest if has plus one */}
          {mainGuestSubmitted && !successfulRsvpForExtraGuests && hasPlusOne && (
            <ExtraGuest guestDetails={guestDetails} onSuccess={() => setSuccessfulRsvpForExtraGuests(true)} />
          )}
          {/* Successful RSVP page if extra guest submitted */}
          {successfulRsvpForExtraGuests && successfulRsvp(guestDetails)}
        </div>
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
