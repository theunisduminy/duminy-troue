import React, { useState } from 'react';
import styles from '@/../styles/Form.module.css';
import homeStyles from '@/../styles/Home.module.css';
import { getGuest } from '../lib/utils/getGuest';
import { updateGuest } from '../lib/utils/getGuest';
import successfulRsvp from './successfulRsvp';
import extraGuest from './extraGuest';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});
  const [withSomeone, setWithSomeone] = useState(false);
  const [error, setError] = useState<string>('');
  const [showFinalMessage, setFinalMessage] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError('');
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const rsvpDecision = selectedOption === 'yes' ? true : false;

    try {
      const updatedGuest = await updateGuest(name, rsvpDecision);
      const guest = await getGuest(name);

      setGuestDetails(guest);

      if (guest.data.guest.saam_iemand) {
        setWithSomeone(true);
      }

      if (guest.status !== 'success' || selectedOption === '') {
        setError('Kyk of jou naam reggespel is.');
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      setError('Kyk of jou naam reggespel is.');
    }
  };

  const extraGuestSection = extraGuest(withSomeone, guestDetails);

  return (
    <div>
      {!submitted && (
        <h1 className={homeStyles.title}>
          Ons is so opgewonde om die groot dag saam jou te deel.<br></br>
        </h1>
      )}
      {!submitted && (
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
      )}

      {submitted && extraGuestSection}
    </div>
  );
}
