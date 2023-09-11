import { FC } from 'react';
import styles from './NavBar.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import Link from 'next/link';
import { NavUserMenu } from '../NavUserMenu';
import { BiSolidCommentDetail } from 'react-icons/bi';
import { LinkButton } from '../ui/Button/LinkButton';

export const NavBar: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.navBar}>
      <div>
        <Link href='/' className={styles.logoLink}>
          <BiSolidCommentDetail size='24' />
          <span>saidit</span>
        </Link>
      </div>
      <div>
        {session?.user ? (
          <NavUserMenu user={session.user} />
        ) : (
          <LinkButton href='/sign-in'>Sign In</LinkButton>
        )}
      </div>
    </div>
  );
};
