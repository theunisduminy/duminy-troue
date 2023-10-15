import Link from 'next/link';
import { useRouter } from 'next/router';

interface HeaderProps {
  link?: string;
  // showTitle?: boolean;
}

const Header: React.FC<HeaderProps> = ({ link }) => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <>
      {path !== '/' && (
        <Link href='/' className='text-[#102135] hover:underline py-5'>
          <i className='fa fa-arrow-left'></i> Back to Home
        </Link>
      )}
      <div className='text-center max-w-2xl mx-auto flex align-center justify-center'>
        <img
          src={`./images/${link}`}
          className='w-[80%] pt-5 md:w-70 md:px-20'
          alt='Header Image'
        />
      </div>
    </>
  );
};

export default Header;
