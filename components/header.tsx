import styles from '@/../styles/Header.module.css';
import { useRouter } from 'next/router';

export default function Header(title: string, showTitle: boolean = true) {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className={styles.homeNav}>
      {path !== '/' && (
        <a className={styles.backLink} href='/'>
          <i className='fa fa-arrow-left'></i> Back to Home
        </a>
      )}
      <br></br>
      <img src='/lord-milner-signed.png' className={styles.hotel} />
      {showTitle && <h1 className={styles.title}>{title}</h1>}
    </div>
  );
}
