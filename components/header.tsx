import styles from '@/../styles/Header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header(title: string, showTitle: boolean = true) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.homeNav}>
      {path !== '/' && (
        <Link className={styles.backLink} href='/'>
          <i className='fa fa-arrow-left'></i> Back to Home
        </Link>
      )}
      <br></br>
      <img src='./images/lord-milner-signed.png' className={styles.hotel} />
      {showTitle && <h1 className={styles.title}>{title}</h1>}
    </div>
  );
}
