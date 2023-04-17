import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

function SearchBar() {
  return (
    <div className="w-search-bar_width flex items-center justify-between mx-3 bg-app_color-purple-10 pr-1 rounded-md">
      <input
        type="text"
        className="px-3 py-2 bg-transparent focus:outline-none"
        placeholder="Search..."
      />
      <MagnifyingGlassIcon className="w-6 h-6  text-2xl text-white" />
    </div>
  );
}

export default SearchBar;
