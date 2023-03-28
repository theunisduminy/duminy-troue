/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
// pages/index.js

const Head = require('next/head');
const Link = require('next/link');
const styles = require('../styles/Home.module.css');

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Simple Next.js demo! See{' '}
          <Link href='/cars'>Guests</Link>
        </h1>
      </main>
    </div>
  );
}

module.exports = Home;
