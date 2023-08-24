import { FC } from 'react';
import Image from 'next/image';
import styles from './Avatar.module.css';

type AvatarProps = {
  image?: string;
};

export const Avatar: FC<AvatarProps> = ({ image }) => {
  return (
    <div className={styles.avatar}>
      {image && (
        <Image src={image} width={30} height={30} quality={100} alt='' />
      )}
    </div>
  );
};
