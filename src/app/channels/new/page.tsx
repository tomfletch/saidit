'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';
import { useMutation } from '@tanstack/react-query';
import { CreateChannelPayload } from '@/lib/validators/channel';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { NextPage } from 'next';

const NewChannel: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  const { mutate: createChannel, isLoading } = useMutation({
    mutationFn: async () => {
      const payload: CreateChannelPayload = { name }

      const { data } = await axios.post('/api/channels', payload);
      return data as string;
    },
    onError: (err) => {
      console.error(err);
    },
    onSuccess: (data) => {
      router.push(`/c/${data}`);
    }
  })

  return (
    <div className='container'>
      <h1>Create a channel</h1>
      <div className={styles.inputContainer}>
        <span className={styles.inputPrefix}>c/</span>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <Button
        isLoading={isLoading}
        disabled={name.length === 0}
        onClick={() => createChannel()}
      >
        Create channel
      </Button>
    </div>
  );
};

export default NewChannel;
