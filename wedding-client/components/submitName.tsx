import React, { useState } from 'react';
import styles from '@/../styles/Form.module.css';
import homeStyles from '@/../styles/Home.module.css';
import { log } from 'console';

export default function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [guestDetails, setGuestDetails] = useState<Record<string, any>>({});
  const [error, setError] = useState<string>('');

  const nameWithoutSpacesOrCaps = name.replace(/\s+/g, '-').toLowerCase();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setError('');
  };

  const handleSelectChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const updatedGuest = await updateGuest(nameWithoutSpacesOrCaps);
      const guest = await getGuest(nameWithoutSpacesOrCaps);

      setGuestDetails(guest);

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

  const getGuest = async (nameWithoutSpacesOrCaps: string) => {
    const response = await fetch(`/api/guests/${nameWithoutSpacesOrCaps || 'wrong'}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });

    return response.json();
  };

  const updateGuest = async (nameWithoutSpacesOrCaps: string) => {
    const response = await fetch(`/api/guests/${nameWithoutSpacesOrCaps || 'wrong'}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rsvp: true }),
      method: 'PATCH',
    });

    return response.json();
  };

  return (
    <div>
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
        </form>
      )}

      {error !== '' && (
        <div className={styles.error}>
          <label>{`${error}`}</label>
        </div>
      )}

      {submitted && <label className={styles.label}>Dankie {`${name}`}</label>}
      {submitted && (
        <div>
          <label className={homeStyles.label}>{`${guestDetails.data.guest.message}`}</label>
          <div className={homeStyles.grid}>
            <a href='/' className={homeStyles.card}>
              <h3>Take me home &rarr;</h3>
              <p>Contry road, to the place, where I beloooong</p>
            </a>

            <a href='https://nextjs.org/learn' className={homeStyles.card}>
              <h3>Registry &rarr;</h3>
              <p>Goedjies wat ons graag soek, meestal Mignon.</p>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
