import { FC } from 'react';
import styles from './NavBar.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';

export const NavBar: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.navBar}>
      <div className={styles.navStart}>
        <Link href='/'>saidit</Link>
      </div>
      <div className={styles.navEnd}>
        {session?.user ? (
          <>
            <div>Signed in as {session.user.name}</div>
          </>
        ) : (
          <Link href='/sign-in'>Sign In</Link>
        )}
      </div>
    </div>
  );
};
