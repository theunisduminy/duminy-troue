import Head from 'next/head';
import clientPromise from '../lib/mongodb';
import { InferGetServerSidePropsType } from 'next';
import styles from '@/../styles/Home.module.css';
import React, { useState } from 'react';
import Form from '../components/submitName';

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

export default function Rsvp({
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
          Ons is so opgewonde om die groot dag saam jou te deel.<br></br>
        </h1>

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
