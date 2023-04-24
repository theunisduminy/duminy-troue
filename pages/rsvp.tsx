import Head from 'next/head';
import styles from '@/../styles/Home.module.css';
import Form from '../components/submitRsvp';

export default function Rsvp() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div>
          <Form />
        </div>
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
