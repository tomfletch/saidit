'use client';

import { signOut } from 'next-auth/react';
import { FC, useState } from 'react';
import { Button } from '../ui/Button';
import { User } from 'next-auth';
import { Avatar } from '../Avatar';
import styles from './NavUserMenu.module.css';

type NavUserMenuProps = {
  user: Pick<User, 'name' | 'image' | 'email'>;
};

export const NavUserMenu: FC<NavUserMenuProps> = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={styles.navUserMenu}>
      <button
        className={styles.dropdownTarget}
        type='button'
        onClick={() => setIsDropdownOpen((open) => !open)}
      >
        <Avatar image={user.image || undefined} />
      </button>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownSection}>
            <div>{user.name}</div>
            <div className={styles.email}>{user.email}</div>
          </div>
          <div className={styles.dropdownSection}>
            <Button isFullWidth>Create a Channel</Button>
          </div>
          <div className={styles.dropdownSection}>
            <Button
              isFullWidth
              onClick={() =>
                signOut({ callbackUrl: `${window.location.origin}` })
              }
            >
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
