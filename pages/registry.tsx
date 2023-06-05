import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Header from '../components/header';

export default function Registry() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>{Header('Under construction')}</main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
