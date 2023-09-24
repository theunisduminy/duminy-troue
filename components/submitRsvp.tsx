import React, { useState } from 'react';
import styles from '../styles/Form.module.css';
import { getGuest } from '../lib/utils/guestRequests';
import { updateGuest } from '../lib/utils/guestRequests';
import SelectButtonComponent from './selectionButtons';
import { getTranslation } from '../lib/language';

interface SubmitMainGuestProps {
  // other prop definitions
  onSubmit: (isSubmitted: boolean, guestData: Record<string, any>, isVegetarian: boolean | undefined) => void;
  language: 'afr' | 'eng';
}

export default function RsvpForm({ onSubmit, language }: SubmitMainGuestProps) {
  const [guestCellNumber, setGuestCellNumber] = useState('');
  const [isAttending, setIsAttending] = useState<boolean | undefined>();
  const [isVegetarian, setGuestDiet] = useState<boolean | undefined>();
  const [error, setError] = useState<string>('');

  const translation = getTranslation(language);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestCellNumber(event.target.value);
    setError('');
  };

  const handleDietChange = (isVegetarian: boolean) => {
    setGuestDiet(isVegetarian);
  };

  const handleSelectChange = (isAttending: boolean) => {
    setIsAttending(isAttending);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const guest = await getGuest(guestCellNumber);
      await updateGuest(guestCellNumber, isAttending, isVegetarian);

      if (guest.status !== 'success') {
        setError(`${translation.number_error}`);
      } else if (isAttending === undefined || isVegetarian === undefined) {
        setError(`${translation.rsvp_error}`);
      } else {
        onSubmit(true, guest, isVegetarian);
      }
    } catch (error) {
      console.error(error);
      setError('Iets het verkeerd gegaan. Bel vir Theunis en sê vir hom die website is kak.');
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Error message */}
        {error !== '' && (
          <div className={styles.error}>
            <label>{`${error}`}</label>
          </div>
        )}

        {/* Cellphone number */}
        <input
          className={styles.input}
          type='text'
          id='name'
          placeholder={translation.cellphone_num}
          value={guestCellNumber}
          onChange={handleNameChange}
        />

        <div className={styles.vl}></div>

        {/* RSVP */}
        <SelectButtonComponent
          selection={isAttending}
          name={'attendance'}
          label={translation.attend}
          buttonOptions={['Ja', 'Nee']}
          showIcons={true}
          handleSelectChange={handleSelectChange}
        />

        {/* Diet option */}
        <div className={styles.vl}></div>
        <SelectButtonComponent
          selection={isVegetarian}
          name={'diet'}
          label={translation.dieet}
          buttonOptions={['Vegetarian 🥦', translation.vleis]}
          showIcons={false}
          handleSelectChange={handleDietChange}
        />
        <div className={styles.vl}></div>

        {/* Submit button */}
        <button type='submit'>
          <i className='fa fa-arrow-right'></i>
        </button>
      </form>
    </div>
  );
}
