import Head from 'next/head';
import { useState } from 'react';
import RsvpForm from '../components/SubmitRsvp';
import SuccessfulRsvp from '../components/SuccessfulRsvp';
import Header from '../components/Header';
import LanguageSwitchButtons from '../components/LanguageSwitchButtons';
import { getTranslation } from '../lib/language';
import useLanguageStore from '../lib/store';
import CountdownTimer from '../components/CountdownTimer';

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

  const translation = getTranslation(language);

  const submitMainGuest = (
    isSubmitted: boolean,
    guestData: Record<string, any>,
  ) => {
    setMainGuestSubmitted(isSubmitted);
    setGuestDetails(guestData);
  };

  return (
    <>
      <Head>
        <title>{`RSVP | Duminy Troue`}</title>
        <meta name='description' content='RSVP Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='py-5 bg-gradient-to-b from-[#EFDDCD] to-white'>
        <LanguageSwitchButtons />
        <Header link='lord-milner-no-bg-min.png' />
        <div className='text-center max-w-2xl mx-auto flex flex-col items-center justify-center -m-5 pb-4'>
          <CountdownTimer targetDate={new Date('2024-03-23T15:00:00')} />
        </div>

        {!mainGuestSubmitted && (
          <div className='text-3xl px-10 py-5 text-center text-[#102135]'>
            <h1>{translation.naweek_bywoon}</h1>
          </div>
        )}

        <div>
          {/* RSVP Form for main guest */}
          {!mainGuestSubmitted && (
            <RsvpForm language={language} onSubmit={submitMainGuest} />
          )}
          {/* Successful RSVP page if no plus one */}
          {mainGuestSubmitted && SuccessfulRsvp(guestDetails, language)}
        </div>
      </main>
      <footer className='border-solid border-t-2 border-[#102135]'>
        <span>
          Gebou met <i className='fa fa-heart' aria-hidden='true'></i> deur
          Theunis, 2023.
        </span>
      </footer>
    </>
  );
}
