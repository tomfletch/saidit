import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import styles from './Button.module.css';
import Link from 'next/link';

type LinkButtonProps = {
  isLoading?: boolean;
  isFullWidth?: boolean;
} & React.ComponentProps<typeof Link>;

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      isLoading = false,
      isFullWidth = false,
      children,
      className = '',
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        className={`${styles.button} ${
          isFullWidth ? styles.fullWidth : ''
        } ${className}`}
        {...props}
      >
        {children}
        {isLoading && (
          <div className={styles.spinner}>
            <VscLoading />
          </div>
        )}
      </Link>
    );
  },
);

LinkButton.displayName = 'LinkButton';
