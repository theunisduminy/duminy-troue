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
      <div className='text-center text-lg px-8 pb-10'>
        {rsvpStatus ? (
          <>
            <h3 className='font-bold text-lg'>
              {guestDetails.data.guest.name}!!
            </h3>
            <label className='text-[#102135]'>{personalMessage}</label>
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
