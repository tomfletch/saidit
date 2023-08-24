import { GoogleSignInButton } from '@/components/GoogleSignInButton';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { FC } from 'react';

const SignInPage: FC = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    redirect('/');
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <GoogleSignInButton />
    </div>
  );
};

export default SignInPage;
