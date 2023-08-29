'use client';

import { FC, useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/ui/Button';

const NewChannel: FC = () => {
  const [name, setName] = useState('');

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
      <Button>Create channel</Button>
    </div>
  );
};

export default NewChannel;
