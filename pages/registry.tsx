import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/header';
import useLanguageStore from '../lib/store';
import { getTranslation } from '../lib/language';

export default function Registry() {
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
        {Header(`${translation.geskenk_idees_header}`)}
        <div>
          <label>
            Ons verwag nie dat enige iemand vir ons geskenke koop nie. Om saam ons familie, beste
            vriende en ander vriende ons groot dag te vier is goed genoeg.
          </label>
        </div>
      </main>
      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </>
  );
}
