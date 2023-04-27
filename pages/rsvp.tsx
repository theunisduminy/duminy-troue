import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import ExtraGuest from '../components/extraGuestRsvp';
import successfulRsvp from '../components/successfulRsvp';

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

  const submitRsvp = (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
    setHasPlusOne(isWithSomeone);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          {!mainGuestSubmitted && <RsvpForm onSubmit={submitMainGuest} />}
          {mainGuestSubmitted && !hasPlusOne && successfulRsvp(guestDetails)}
          {mainGuestSubmitted && hasPlusOne && (
            <ExtraGuest
              guestDetails={guestDetails}
              onSuccess={() => setSuccessfulRsvpForExtraGuests(true)}
            />
          )}{' '}
        </div>
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
