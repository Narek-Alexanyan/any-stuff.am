import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/utils/shared/ClassesUtils';

interface Props {
  children: ReactNode;
  to: string;
  className?: string;
}

function BaseLink({ children, to, className = '' }: Props) {
  return (
    <Link
      to={to}
      className={classNames(
        className,
        'text-sm text-app_color-default transition-text hover:font-bold'
      )}
    >
      {children}
    </Link>
  );
}

export default BaseLink;
