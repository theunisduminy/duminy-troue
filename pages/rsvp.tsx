import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import RsvpForm from '../components/submitRsvp';
import ExtraGuest from '../components/extraGuestRsvp';
import successfulRsvp from '../components/successfulRsvp';

export default function Rsvp() {
  const [successfulRsvpForExtraGuests, setSuccessfulRsvpForExtraGuests] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});
  const [withSomeone, setWithSomeone] = useState(false);

  const onSubmit = (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => {
    setSubmitted(isSubmitted);
    setGuestDetails(guestData);
    setWithSomeone(isWithSomeone);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          {!submitted && <RsvpForm onSubmit={onSubmit} />}
          {submitted && !withSomeone && successfulRsvp(guestDetails)}
          {submitted && withSomeone && (
            <ExtraGuest
              guestDetails={guestDetails}
              withSomeone={withSomeone}
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
