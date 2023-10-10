import Head from 'next/head';
import Header from '../components/Header';
import { getTranslation } from '../lib/language';
import useLanguageStore from '../lib/store';
import LanguageSwitchButtons from '../components/LanguageSwitchButtons';
import FAQItem from '../components/FAQItem';

export default function Naweekplan() {
  const { language, setLanguage } = useLanguageStore((state) => {
    return {
      language: state.language,
      setLanguage: state.setLanguage,
    };
  });

  const translation = getTranslation(language);

  return (
    <>
      <Head>
        <title>Naweekplan | Duminy Troue</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='py-5 bg-gradient-to-b from-[#EFDDCD] to-white mb-5'>
        <LanguageSwitchButtons />
        <Header link='lord-milner-no-bg.png' />

        {/* PDF download section */}
        <div className='text-4xl text-[#102135]'>
          <h1>{language === 'afr' ? 'Naweekplan' : 'Weekend plan'}</h1>
        </div>
        <div className='border-l-4 border-[#f1cdcd] h-10 mx-auto my-4'></div>

        {/* FAQ section */}
        <div className='text-4xl text-[#102135]'>
          <h1>FAQs</h1>
        </div>
        <div className='border-l-4 border-[#f1cdcd] h-10 mx-auto my-4'></div>
        {translation.faq.map((item) => {
          return <FAQItem question={item.question} answer={item.answer} />;
        })}
      </main>
      <footer className='border-solid border-t-2 border-[#102135]'>
        <span>Gebou deur Theunis.</span>
      </footer>
    </>
  );
}
