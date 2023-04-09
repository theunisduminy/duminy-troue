import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import styles from '@/../styles/Home.module.css';
import React, { useState } from 'react';

// context
export async function getServerSideProps() {
  try {
    await clientPromise;

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Duminy Troue</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <img src='/lord-milner-signed.png' className={styles.hotel} />
        <h1 className={styles.title}>
          Mignon du Plessis & Theunis Duminy trou!<br></br>
        </h1>
        <p className={styles.description}>22-24 Maart, 2024</p>

        <div className={styles.grid}>
          <a href='/rsvp' className={styles.card}>
            <h3>RSVP &rarr;</h3>
            <p>Laat weet of jy en jou metgeselle kan kom.</p>
          </a>

          <a href='/naweekplan' className={styles.card}>
            <h3>Naweekplan &rarr;</h3>
            <p>Waar, wanneer, hoe laat en wat 'n mens dra na so ding.</p>
          </a>

          <a href='/registry' className={styles.card}>
            <h3>Registry &rarr;</h3>
            <p>Goed wat Mignon sê ons nodig het, blykbaar.</p>
          </a>
        </div>

        <div className={styles.vl}></div>

        <p className={styles.description}>
          Die troue is in{' '}
          <a href='https://www.google.com/maps/place/Lord+Milner+Hotel+(Matjiesfontein)/@-33.2310257,20.5799933,17z/data=!3m1!4b1!4m9!3m8!1s0x1dd3110f98e906e5:0x40d4cb7334e175dd!5m2!4m1!1i2!8m2!3d-33.2310302!4d20.582182!16s%2Fg%2F1tc_hj29'>
            <strong>Matjiesfontein</strong>
          </a>{' '}
          as jy nog nie dit uitgefigure het nie.
        </p>
      </main>

      <footer>
        <span>Gebou deur Theunis Duminy.</span>
      </footer>
    </div>
  );
}
