import LinkCards from './LinkCards';
import { getTranslation } from '../lib/language';

const SuccessfulRsvp: React.FC = (
  guestDetails: Record<string, any>,
  language: 'afr' | 'eng',
) => {
  // variables
  const translation = getTranslation(language);
  const rsvpStatus = guestDetails.data.guest.rsvp;
  const personalMessage =
    guestDetails.data.guest.message !== 'geen'
      ? guestDetails.data.guest.message
      : translation.successfulRsvp;

  return (
    <>
      <div className='text-center text-lg py-10 px-8'>
        {rsvpStatus ? (
          <>
            <label className='text-center'>{personalMessage}</label>
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
