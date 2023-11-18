import LinkCards from './LinkCards';
import { getTranslation } from '../lib/language';

const SuccessfulRsvp: React.FC = (
  guestDetails: Record<string, any>,
  language: 'afr' | 'eng',
) => {
  // variables
  const translation = getTranslation(language);
  const rsvpStatus = guestDetails.data.guest.rsvp;
  const guestName = guestDetails.data.guest.name;
  const guestFirstName = guestName.split(' ')[0];
  const capitalizedName =
    guestFirstName.charAt(0).toUpperCase() + guestFirstName.slice(1);

  return (
    <>
      <div className='text-center text-lg py-10 px-8'>
        {rsvpStatus ? (
          <>
            <p className='mb-5 p-3 text-lg border-2 border-black rounded-xl'>
              {language === 'afr'
                ? `Dankie ${capitalizedName}, RSVP Suksesvol`
                : `Thank you, ${capitalizedName} - RSVP Successful!`}{' '}
              <i
                className='fa fa-check-square-o text-green-500'
                aria-hidden='true'
              ></i>
            </p>
            <p className='text-center'>{translation.successfulRsvp}</p>
            <p className='text-center pt-5'>{translation.next_steps}</p>
            <p className='text-center pt-5'>{translation.next_steps_2}</p>
          </>
        ) : (
          <label className='text-[#102135]'>
            {translation.unSuccessfulRsvp}
          </label>
        )}
      </div>
      <LinkCards language={language} />
    </>
  );
};

export default SuccessfulRsvp;
