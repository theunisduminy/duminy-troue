import { getTranslation } from '../lib/language';

const cardStyling =
  'bg-[#f1cdcd] m-4 p-4 w-80 text-center rounded-lg border-solid border border-[#102135] text-[#102135] transition duration-200 transform hover:scale-105';

// const cardStyling =
//   'bg-[#899481] m-4 p-4 w-80 text-center rounded-lg border-solid border-2 border-[#102135] text-white transition duration-200 transform hover:scale-105';

interface LinkCardsProps {
  showRsvp?: boolean;
  showNaweekplan?: boolean;
  showRegistry?: boolean;
  showBackToHome?: boolean;
  language: 'afr' | 'eng';
}

const LinkCards: React.FC<LinkCardsProps> = ({
  showRsvp = true,
  showNaweekplan = true,
  showRegistry = true,
  showBackToHome = true,
  language,
}) => {
  const translation = getTranslation(language);

  return (
    <div className='flex justify-center items-center flex-wrap'>
      {/* Back to Home */}
      {showBackToHome && (
        <a href='/' className={cardStyling}>
          <h3 className='text-xl mb-2'>{translation.home_header} &rarr;</h3>
          <p>{translation.home_sub}</p>
        </a>
      )}

      {/* RSVP */}
      {showRsvp && (
        <a href='/rsvp' className={cardStyling}>
          <h3 className='text-xl mb-2'>RSVP &rarr;</h3>
          <p>{translation.rsvp_sub}</p>
        </a>
      )}

      {/* Naweekplan */}
      {showNaweekplan && (
        <a href='/naweekplan' className={cardStyling}>
          <h3 className='text-xl mb-2'>
            {translation.naweek_plan_header} &rarr;
          </h3>
          <p>{translation.naweek_plan_sub}</p>
        </a>
      )}

      {/* Registry */}
      {showRegistry && (
        <a href='/registry' className={cardStyling}>
          <h3 className='text-xl mb-2'>
            {translation.geskenk_idees_header} &rarr;
          </h3>
          <p>{translation.geskenk_idees_sub}</p>
        </a>
      )}
    </div>
  );
};

export default LinkCards;