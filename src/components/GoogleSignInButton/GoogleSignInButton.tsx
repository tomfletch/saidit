'use client';

import { FC, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

import { Button } from '../ui/Button';

export const GoogleSignInButton: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google', { callbackUrl: `${window.location.origin}` });
    } catch (error) {
      // TODO: Show error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button isLoading={isLoading} type='button' onClick={loginWithGoogle}>
      <FaGoogle />
      Sign in with Google
    </Button>
  );
};
