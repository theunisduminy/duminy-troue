import Head from 'next/head';
import Link from '../components/LinkCards';
import Header from '../components/Header';
import LanguageSwitchButtons from '../components/LanguageSwitchButtons';
import useLanguageStore from '../lib/store';
import { getTranslation } from '../lib/language';
import CountdownTimer from '../components/CountdownTimer';

export default function Home() {
  const { language } = useLanguageStore((state) => ({
    language: state.language,
  }));
  const translation = getTranslation(language);

  const locationLink =
    'https://www.google.com/maps/place/Lord+Milner+Hotel+(Matjiesfontein)/@-33.2310257,20.5799933,17z/data=!3m1!4b1!4m9!3m8!1s0x1dd3110f98e906e5:0x40d4cb7334e175dd!5m2!4m1!1i2!8m2!3d-33.2310302!4d20.582182!16s%2Fg%2F1tc_hj29';

  const isAfrikaans = language === 'afr';

  return (
    <>
      <Head>
        <title>Duminy Troue</title>
        <meta name='description' content='RSVP Website' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:image'
          content='/public/images/lord-milner-no-bg-min.png'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-[#EFDDCD] pt-5 mb-12'>
        <LanguageSwitchButtons />

        <div className='text-7xl pt-16 pb-10 text-center text-[#102135]'>
          <h1 className='pb-2'>Theunis</h1>
          <h1 className='pb-2'>&</h1>
          <h1>Mignon</h1>
          <div className='border-l-4 border-black flex flex-col h-32 ml-[50%] my-10'></div>
          <h3 className='text-3xl'>
            {language === 'afr' ? 'gaan trou' : 'are getting married'}!
          </h3>
        </div>
        <Header link='theunis-mignon-min.png' />

        {/* Date + counter */}
        <div className='pt-5 text-center items-center bg-gradient-to-b from-[#EFDDCD] to-white'>
          <div className='pb-16'>
            <p className='text-xl pt-10'>
              {language === 'afr'
                ? 'Merk jou kalender vir'
                : 'Mark your calender for'}
            </p>
            <p className='text-4xl text-[#102135] pb-2'>
              22-24 {translation.month}, 2024
            </p>
            <CountdownTimer targetDate={new Date('2024-03-23T15:00:00')} />
          </div>

          {/* Lord Milner picture */}
          <div className='text-center max-w-2xl mx-auto flex flex-col items-center justify-center pb-10 px-10 text-xl'>
            <p>
              {translation.waar_die_troue_is_1}{' '}
              <a href={locationLink} className='text-3xl'>
                <strong className='text-[#4077a9] py-5 hover:underline'>
                  Matjiesfontein
                </strong>
              </a>
              <img
                src='./images/lord-milner-no-bg-min.png'
                className='py-5 w-[100%] md:w-70 md:px-20'
                alt='Header Image'
              />
            </p>
            <p className='pt-1'>{translation.waar_die_troue_is_2}</p>
          </div>

          {/* Cards for linking to other pages */}
          <Link showBackToHome={false} language={language} />
        </div>
      </main>
      {/* Footer element */}
      <footer className='border-solid border-t-2 border-[#102135]'>
        <span>
          Gebou met <i className='fa fa-heart' aria-hidden='true'></i> deur
          Theunis, 2023.
        </span>
      </footer>
    </>
  );
}
