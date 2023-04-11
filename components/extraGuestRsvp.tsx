import styles from '@/../styles/Form.module.css';
import React, { useState } from 'react';
import { updateGuest } from '../lib/utils/getGuest';
import successfulRsvp from './successfulRsvp';

export default function extraGuest(withSomeone: boolean, guestDetails: Record<string, any>) {
  const [selectedOption, setSelectedOption] = useState('');
  const [successfulRsvpForExtraGuests, setRsvpForExtraGuests] = useState(false);
  const [error, setError] = useState<string>('');

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const guestsToRsvpFor = guestDetails.data.guest.saam_wie;

    if (selectedOption === '') {
      setError('Geen opsie gekies nie.');
      return;
    }

    try {
      guestsToRsvpFor.map(async (person: string) => {
        const rsvpDecision = true;
        await updateGuest(person, rsvpDecision);
      });
    } catch (error) {
      console.error(error);
      return;
    }

    setRsvpForExtraGuests(true);
  };

  if (withSomeone && !successfulRsvpForExtraGuests) {
    return (
      <form onSubmit={handleSubmit}>
        <div className={styles.extraRsvp}>
          <label className={styles.label}>
            Terwyl jy hier is, wil jy sommer vir hierdie{' '}
            {guestDetails.data.guest.saam_wie.length > 1 ? 'mense' : 'mens'} ook RSVP?
          </label>
          {guestDetails.data.guest.saam_wie.map((person: string) => (
            <p key={person}>
              {person
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </p>
          ))}
        </div>
        <div className={styles.vl}></div>
        <div>
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
                Yebo <i className='fa fa-check'></i>
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
                Nope <i className='fa fa-times'></i>
              </span>
            </label>
          </div>
        </div>
        <div className={styles.vl}></div>
        <button type='submit'>
          <i className='fa fa-arrow-right'></i>
        </button>
        {error !== '' && (
          <div className={styles.error}>
            <label>{`${error}`}</label>
          </div>
        )}
      </form>
    );
  } else {
    return successfulRsvpForExtraGuests && successfulRsvp(guestDetails);
  }
}
