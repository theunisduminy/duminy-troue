import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { getGuest } from '../lib/utils/getGuest';
import Header from './header';
import { submitMainGuestProps } from '../pages/rsvp';

interface SubmitMainGuestProps {
  // other prop definitions
  onSubmit: (isSubmitted: boolean, guestData: Record<string, any>, hasPlusOne: boolean) => void;
}

export default function RsvpForm({ onSubmit }: SubmitMainGuestProps) {
  const [guestName, setGuestName] = useState('');
  const [guestDiet, setGuestDiet] = useState('');
  const [isAttending, setIsAttending] = useState<boolean | undefined>();
  const [error, setError] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestName(event.target.value);
    setError('');
  };

  const handleDietChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestDiet(event.target.value);
    setError('');
  };

  const handleSelectChange = (isAttending: boolean | undefined) => {
    setIsAttending(isAttending);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const guest = await getGuest(guestName);

      if (guest.status !== 'success') {
        setError('Kyk of jou naam reggespel is.');
      } else {
        const isWithSomeone = guest.data.guest.saam_iemand;
        onSubmit(true, guest, isWithSomeone);
      }
    } catch (error) {
      console.error(error);
      setError('Kyk of jou naam reggespel is.');
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          id='name'
          placeholder='Wat is jou naam en van?'
          value={guestName}
          onChange={handleNameChange}
        />
        {error !== '' && (
          <div className={styles.error}>
            <label>{`${error}`}</label>
          </div>
        )}
        <div className={styles.vl}></div>
        <div>
          <label className={styles.label} htmlFor='name'>
            Kan jy kom?
          </label>

          <div className={styles.rsvp}>
            {' '}
            <label className={styles.switch}>
              <input
                type='radio'
                name='attendance'
                value='yes'
                checked={isAttending}
                onChange={(e) => handleSelectChange(e.target.checked)}
              />
              <span className={styles.slider}>
                Ja <i className='fa fa-check'></i>
              </span>
            </label>
            <label className={`${styles.switch} ${styles.two}`}>
              <input
                type='radio'
                name='attendance'
                value='no'
                checked={isAttending === false}
                onChange={(e) => handleSelectChange(!e.target.checked)}
              />
              <span className={styles.slider}>
                Nee <i className='fa fa-times'></i>
              </span>
            </label>
          </div>
        </div>
        <div className={styles.vl}></div>
        {/* {isAttending && (
          <>
            <input
              className={styles.input}
              type='text'
              id='diet'
              placeholder='Enige dieet vereistes?'
              value={guestDiet}
              onChange={handleDietChange}
            />
            <div className={styles.vl}></div>
          </>
        )} */}
        <button type='submit'>
          <i className='fa fa-arrow-right'></i>
        </button>
      </form>
    </div>
  );
}
