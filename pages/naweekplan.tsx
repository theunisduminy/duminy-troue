import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/Header-1';
import dayPlan from '../components/dayInfo';
import { getTranslation } from '../lib/language';
import useLanguageStore from '../lib/store';

export default function Naweekplan() {
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

  return (
    <>
      <main>
        <button onClick={handleLanguageChange}>{translation.button}</button>
        <Header link='lord-milner-signed.png' />
        <div className={styles.vl}></div>

        {/* Vrydag */}
        {dayPlan({
          date: `${translation.vrydag.date}`,
          copy: `${translation.vrydag.copy}`,
        })}

        {/* Saterdag */}
        {dayPlan({
          date: `${translation.saterdag.date}`,
          copy: `${translation.saterdag.copy}`,
        })}

        {/* Sonday */}
        {dayPlan({
          date: `${translation.sondag.date}`,
          copy: `${translation.sondag.copy}`,
        })}
      </main>
      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </>
  );
}
