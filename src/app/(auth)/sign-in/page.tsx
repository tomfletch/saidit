'use client';

import { Button } from '@/components/ui/Button';
import { signIn } from 'next-auth/react';
import { FC, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';

const SignInPage: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      // TODO: Show error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome back</h1>
      <Button isLoading={isLoading} type='button' onClick={loginWithGoogle}>
        <FaGoogle />
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInPage;
