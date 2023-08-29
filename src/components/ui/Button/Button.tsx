import React from 'react';
import { VscLoading } from 'react-icons/vsc';
import styles from './Button.module.css';

type ButtonProps = {
  isLoading?: boolean;
  isFullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      <button
        ref={ref}
        disabled={isLoading}
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
      </button>
    );
  },
);

Button.displayName = 'Button';
