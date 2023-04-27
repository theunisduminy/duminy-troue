import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { getGuest } from '../lib/utils/getGuest';
import { updateGuest } from '../lib/utils/getGuest';
import Header from './header';

interface RsvpFormProps {
  onSubmit: (isSubmitted: boolean, guestData: Record<string, any>, isWithSomeone: boolean) => void;
}

export default function RsvpForm({ onSubmit }: RsvpFormProps) {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState<string>('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError('');
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rsvpDecision = selectedOption === 'yes';

    try {
      await updateGuest(name, rsvpDecision);
      const guest = await getGuest(name);

      if (guest.status !== 'success' || selectedOption === '') {
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
      {Header('Laat weet of jy die naweek sal kan bywoon.', false)}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          id='name'
          placeholder='Wat is jou naam en van?'
          value={name}
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
                type='checkbox'
                value='yes'
                checked={selectedOption === 'yes'}
                onChange={handleSelectChange}
              />
              <span className={styles.slider}>
                Ja <i className='fa fa-check'></i>
              </span>
            </label>
            <label className={`${styles.switch} ${styles.two}`}>
              <input
                type='checkbox'
                value='no'
                checked={selectedOption === 'no'}
                onChange={handleSelectChange}
              />
              <span className={styles.slider}>
                Nee <i className='fa fa-times'></i>
              </span>
            </label>
          </div>
        </div>
        <div className={styles.vl}></div>
        <button type='submit'>
          <i className='fa fa-arrow-right'></i>
        </button>
      </form>
    </div>
  );
}
