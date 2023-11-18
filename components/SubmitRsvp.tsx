import React, { useState, useEffect } from 'react';
import { getGuest } from '../lib/utils/guestRequests';
import { updateGuest } from '../lib/utils/guestRequests';
import SelectButtonComponent from './SelectionButtons';
import { getTranslation } from '../lib/language';

interface SubmitMainGuestProps {
  // other prop definitions
  onSubmit: (
    isSubmitted: boolean,
    guestData: Record<string, any>,
    isVegetarian: boolean | undefined,
  ) => void;
  language: 'afr' | 'eng';
}

const RsvpForm: React.FC<SubmitMainGuestProps> = ({ onSubmit, language }) => {
  const [guestCellNumber, setGuestCellNumber] = useState<string>('');
  const [guestName, setGuestName] = useState('');
  const [isAttending, setIsAttending] = useState<boolean | undefined>();
  const [isVegetarian, setGuestDiet] = useState<boolean | undefined>();
  const [error, setError] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const translation = getTranslation(language);

  const handleNameChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setGuestCellNumber(event.target.value);
    setError('');
  };

  useEffect(() => {
    async function getNameOfGuest() {
      try {
        const data = await getGuest(guestCellNumber);
        const nameOfGuest = data.data.guest.name;
        const firstWord = nameOfGuest.split(' ')[0];
        const capitalizedFirstWord =
          firstWord.charAt(0).toUpperCase() + firstWord.slice(1);

        setGuestName(capitalizedFirstWord);
      } catch (error) {
        console.error('Error fetching top name:', error);
      }
    }

    if (guestCellNumber) {
      getNameOfGuest();
    }
  }, [guestCellNumber]);

  const handleDietChange = (isVegetarian: boolean) => {
    setGuestDiet(isVegetarian);
  };

  const handleSelectChange = (isAttending: boolean) => {
    setIsAttending(isAttending);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      await updateGuest(guestCellNumber, isAttending, isVegetarian);
      const guest = await getGuest(guestCellNumber);

      if (guest.status !== 'success') {
        setError(`${translation.number_error}`);
      } else if (
        isAttending === undefined ||
        (isAttending === true && isVegetarian === undefined)
      ) {
        setError(`${translation.rsvp_error}`);
      } else {
        onSubmit(true, guest, isVegetarian);
      }
    } catch (error) {
      console.error(error);
      setError(
        'Iets het verkeerd gegaan. Bel vir Theunis en sê vir hom die website is kak.',
      );
    } finally {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div>
      <form
        className='flex flex-col p-1 w-[300px] items-center'
        onSubmit={handleSubmit}
      >
        {error !== '' && (
          <div className='text-red-500 mb-4'>
            <label>{`${error}`}</label>
          </div>
        )}

        <label className='mb-4 text-lg'>{translation.cellphone_num}</label>
        <input
          className='input border-[#102135] border-2 rounded-lg p-4 w-[100%] h-12 grid text-center'
          id='name'
          placeholder='e.g. 0817267083'
          value={guestCellNumber}
          onChange={handleNameChange}
          type='text'
          inputMode='numeric'
        />

        <div className='border-l-4 border-[#f1cdcd] h-8 mx-auto my-4'></div>

        {guestName !== '' && (
          <>
            <h3 className='text-2xl font-bold'>
              Hi {guestName.replace(/\b\w/g, (match) => match.toUpperCase())}!
            </h3>
            <i
              className='fa fa-long-arrow-down text-[#f1cdcd] text-3xl mt-4'
              aria-hidden='true'
            ></i>
          </>
        )}

        <SelectButtonComponent
          selection={isAttending}
          name={'attendance'}
          label={translation.attend}
          buttonOptions={['Ja', 'Nee']}
          showIcons={true}
          handleSelectChange={handleSelectChange}
        />

        {isAttending && (
          <div className='border-l-4 border-[#f1cdcd] h-8 mx-auto my-4'></div>
        )}

        {isAttending && (
          <SelectButtonComponent
            selection={isVegetarian}
            name={'diet'}
            label={translation.dieet}
            buttonOptions={['Vegetarian 🥦', translation.vleis]}
            showIcons={false}
            handleSelectChange={handleDietChange}
          />
        )}

        {isSubmitting ? (
          <div className='text-3xl pt-10'>
            <i className='fa fa-spinner fa-spin  text-4xl text-[#f1cdcd]'></i>
          </div>
        ) : (
          <>
            <div className='border-l-4 border-[#f1cdcd] h-8 mx-auto my-4'></div>
            <button
              type='submit'
              className='text-xl bg-[#f1cdcd;] w-40 border border-[#102135] rounded-2xl'
            >
              <i className='fa fa-arrow-right'></i>
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default RsvpForm;
