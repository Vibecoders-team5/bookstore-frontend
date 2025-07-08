import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom';

import { DropdownSelect } from '@/components/ui/DropdownSelect';
import { SearchBar } from '@/components/ui/input';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

export const HeaderL = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  //const totalCount = useCartStore((state) => state.totalCount); для керування відображення counter in cart icon
  const totalCount = 12; // заглушка

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleMenuToggle = () => {
    setModalVisible((prev) => !prev);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'relative h-full flex items-center justify-center uppercase transition-colors duration-200 group',
      {
        'text-[#313237] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-[#313237] after:w-full after:scale-x-100 after:origin-center after:transition-transform after:duration-300':
          isActive,

        'text-[#89939A] hover:text-[#313237] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-[#313237] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 group-hover:after:scale-x-100':
          !isActive,
      },
    );

  const baseIconClass =
    'flex items-center justify-center w-12 h-full xl:w-[64px] border-l border-[#E2E6E9] text-[#89939A] transition duration-200 transform hover:scale-110 hover:text-[#313237]';

  return (
    <>
      <header className="flex items-center justify-between gap-6 w-full h-12 xl:h-16 bg-white sticky top-0 z-50 shadow-sm">
        <div className="flex items-center w-full h-full gap-6">
          <Link
            to="/"
            className="flex items-center justify-center w-24 xl:w-32 h-full transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg" // breakpoint xl:w-32 1200px
          >
            <img
              src="/books/img/nice-books-logo.png"
              alt="nice-books logo"
              className="h-[22px] xl:h-[28px] w-auto" // breakpoint for xl:h-[28px] 1200px
            />
          </Link>

          <nav
            className="hidden sm:flex items-center justify-center h-full gap-8 xl:gap-16" // breakpoint for xl:gap-16 1200px
          >
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/paper" className={navLinkClass}>
              Paper
            </NavLink>
            <NavLink to="/kindle" className={navLinkClass}>
              Kindle
            </NavLink>
            <NavLink to="/audiobook" className={navLinkClass}>
              Audiobook
            </NavLink>
          </nav>
        </div>

        <div className="hidden xl:flex gap-4 pl-2">
          <SearchBar />

          <DropdownSelect
            options={[
              { label: 'Books', value: 'books' },
              { label: 'Audio Books', value: 'audio' },
              { label: 'E-books', value: 'ebooks' },
            ]}
            placeholder="Choose category"
            className="w-full sm:w-[176px]"
          />
        </div>

        <div className="flex h-full">
          <button
            onClick={handleSearchToggle}
            className={cn(baseIconClass, 'sm:flex xl:hidden hidden')}
          >
            <Search size={16} />
          </button>

          <Link
            to="/favorites-page"
            className={cn(baseIconClass, 'hidden sm:flex')}
          >
            <Heart size={16} />
          </Link>

          <Link to="/cart-page" className={cn(baseIconClass, 'hidden sm:flex')}>
            <div className="relative">
              <ShoppingBag size={16} />
              {totalCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#EB5757] text-white text-[9px] font-semibold rounded-full w-[14px] h-[14px] flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </div>
          </Link>

          <button
            onClick={handleMenuToggle}
            className={cn(baseIconClass, 'sm:hidden border-l-0')}
          >
            <Menu size={16} />
          </button>
        </div>
      </header>

      {isSearchVisible && (
        <div className="w-full px-4 py-2 bg-white shadow-sm sticky top-12 z-40">
          <SearchBar />
          <button onClick={() => setIsSearchVisible(false)}>Close</button>
        </div>
      )}

      {isModalVisible && (
        <div className="fixed top-12 left-0 w-full h-screen bg-white z-40 sm:hidden shadow-md">
          <div className="p-4">
            <p className="text-lg font-semibold">Mobile Menu</p>
            {/* MODAL MENU */}
          </div>
        </div>
      )}
    </>
  );
};
