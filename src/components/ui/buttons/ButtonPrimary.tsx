/* eslint-disable react/button-has-type */
import { ReactNode, MouseEventHandler } from 'react';
import classNames from '@/utils/shared/ClassesUtils';

interface Props {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ButtonPrimary({
  className = '',
  type = 'button',
  disabled,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        className,
        'inline-flex items-center space-x-2 px-4 py-2 bg-app_color-violet text-sm text-app_color-white font-medium rounded-md transition-colors hover:bg-app_color-lavender',
        `${disabled && 'cursor-not-allowed opacity-75'}`
      )}
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
