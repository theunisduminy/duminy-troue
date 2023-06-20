import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/header';
import LinkCards from '../components/linkCards';

export default function Home() {
  return (
    <div className={styles.container}>
      <br></br>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {Header('Mignon du Plessis & Theunis Duminy trou!')}
        <div className={styles.homePage}>
          {/* Page header */}
          <p className={styles.subtitle}>22-24 Maart, 2024</p>

          {/* Cards for linking to other pages */}
          {LinkCards({ showBackToHome: false })}

          {/* Bottom section of the page */}
          <div className={styles.vl}></div>
          <p className={styles.description}>
            Die troue is in{' '}
            <a href='https://www.google.com/maps/place/Lord+Milner+Hotel+(Matjiesfontein)/@-33.2310257,20.5799933,17z/data=!3m1!4b1!4m9!3m8!1s0x1dd3110f98e906e5:0x40d4cb7334e175dd!5m2!4m1!1i2!8m2!3d-33.2310302!4d20.582182!16s%2Fg%2F1tc_hj29'>
              <strong>Matjiesfontein</strong>
            </a>{' '}
            as jy nog nie dit uitgefigure het nie.
          </p>
        </div>
      </main>
      {/* Footer element */}
      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
