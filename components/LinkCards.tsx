import { getTranslation } from '../lib/language';
import { useRouter } from 'next/router';
import Link from 'next/link';

const cardStyling =
  'bg-[#f1cdcd] m-4 p-4 w-80 text-center rounded-lg border-solid border-2 border-[#102135] text-[#102135] transition duration-200 transform hover:scale-105 shadow-2xl';

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

  const router = useRouter();

  const handleReload = () => {
    if (router.pathname === '/rsvp') {
      window.location.reload();
    }
  };

  return (
    <div className='flex justify-center items-center flex-wrap'>
      {/* Back to Home */}
      {showBackToHome && (
        <Link href='/' className={cardStyling}>
          <h3 className='text-xl mb-2'>{translation.home_header} &rarr;</h3>
          <p>{translation.home_sub}</p>
        </Link>
      )}

      {/* RSVP */}
      {showRsvp && (
        <Link href='/rsvp' className={cardStyling} onClick={handleReload}>
          <h3 className='text-xl mb-2'>RSVP &rarr;</h3>
          <p>{translation.rsvp_sub}</p>
        </Link>
      )}

      {/* Naweekplan */}
      {showNaweekplan && (
        <Link href='/naweekplan' className={cardStyling}>
          <h3 className='text-xl mb-2'>
            {translation.naweek_plan_header} &rarr;
          </h3>
          <p>{translation.naweek_plan_sub}</p>
        </Link>
      )}

      {/* Registry */}
      {showRegistry && (
        <Link href='/registry' className={cardStyling}>
          <h3 className='text-xl mb-2'>
            {translation.geskenk_idees_header} &rarr;
          </h3>
          <p>{translation.geskenk_idees_sub}</p>
        </Link>
      )}
    </div>
  );
};

export default LinkCards;
