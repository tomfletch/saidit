import { FC } from 'react';
import styles from './NavBar.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { NavUserMenu } from '../NavUserMenu';
import { BiSolidCommentDetail } from 'react-icons/bi';

export const NavBar: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.navBar}>
      <div className={styles.navStart}>
        <Link href='/' className={styles.logoLink}>
          <BiSolidCommentDetail size='24' />
          <span>saidit</span>
        </Link>
      </div>
      <div className={styles.navEnd}>
        {session?.user ? (
          <NavUserMenu user={session.user} />
        ) : (
          <Link href='/sign-in'>Sign In</Link>
        )}
      </div>
    </div>
  );
};
