/* eslint-disable react/require-default-props */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '@/store';
import classNames from '@/utils/shared/ClassesUtils';

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  const theme = useSelector<RootState>((state) => state.theme.value);
  return (
    <Link to="/" className={classNames(className as string, 'logo')}>
      AnyStuff<span className="text-app_color-violet">.am</span>
    </Link>
  );
}

export default Logo;
