'use client';

import { signOut } from 'next-auth/react';
import { FC, useState } from 'react';
import { Button } from '../ui/Button';
import { User } from 'next-auth';
import { Avatar } from '../Avatar';
import styles from './NavUserMenu.module.css';
import Link from 'next/link';
import { VscDiffAdded, VscSignOut } from 'react-icons/vsc';
import { useDropdown } from '@/hooks/useDropdown';

type NavUserMenuProps = {
  user: Pick<User, 'name' | 'image' | 'email'>;
};

export const NavUserMenu: FC<NavUserMenuProps> = ({ user }) => {
  const { ref, isOpen, open, close } = useDropdown();

  return (
    <div className={styles.navUserMenu}>
      <button
        className={styles.dropdownTarget}
        type='button'
        onClick={() => open()}
      >
        <Avatar image={user.image || undefined} />
      </button>
      {isOpen && (
        <div ref={ref} className={styles.dropdown}>
          <div className={`${styles.dropdownSection} ${styles.dropdownHeading}`}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
          <div className={styles.dropdownSection}>
            <Link href="/channels/new" onClick={() => close()}>
              <VscDiffAdded />
              Create a Channel
            </Link>
          </div>
          <div className={styles.dropdownSection}>
            <button
              onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}` })
              }
            >
              <VscSignOut />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
