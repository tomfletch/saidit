'use client';

import { signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { Button } from '../ui/Button';
import { User } from 'next-auth';

type NavUserMenuProps = {
  user: Pick<User, 'name'>;
};

export const NavUserMenu: FC<NavUserMenuProps> = ({ user }) => {
  return (
    <div>
      Signed in as {user.name}.{' '}
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};
