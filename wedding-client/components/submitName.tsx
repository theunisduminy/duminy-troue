import React, { useState } from 'react';
import styles from '@/../styles/Form.module.css';
import { log } from 'console';

export default function Form() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [guestDetails, setGuestDetails] = useState({});

  const nameWithoutSpacesOrCaps = name.replace(/\s+/g, '-').toLowerCase();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
        alert('Onthou om als reg in te vul.');
      } else {
        setSubmitted(true);
      }
    } catch (error) {
      console.error(error);
      alert('Er is iets misgegaan. Probeer het later opnieuw.');
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
                  <i className='fa fa-check'></i>
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
                  <i className='fa fa-times'></i>
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

      {submitted && <label className={styles.label}>Dankie {`${name}`}</label>}
      {submitted && <label className={styles.label}>{`${guestDetails.data.guest.message}`}</label>}
    </div>
  );
}
