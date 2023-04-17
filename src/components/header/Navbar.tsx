import ButtonPrimary from '../ui/buttons/ButtonPrimary';
import BaseLink from '../ui/links/BaseLink';
import Logo from './Logo';
import SearchBar from './SearchBar';

function Navbar() {
  return (
    <div className="container">
      <div className="flex justify-between items-center h-navbar_height">
        <div className="flex items-center gap-4">
          <Logo />
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <BaseLink to="/#">My account</BaseLink>
          <ButtonPrimary>Post an Ad</ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
