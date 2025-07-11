import { cn } from '@/lib/utils';
import { Link, NavLink } from 'react-router-dom';

import { SearchBar } from '@/components/ui/input';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { NotificationHeaderBtn } from '@/components/ui/Icons/NotificationHeaderBtn';
import { CategoryDropdown } from '@/components/bloks/CategoryDropdown';
import { useBookStore } from '@/store/useBookStore';
import { getSearchResults } from '@/utils/getSearchResults';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { SearchDropdown } from './SearchDropdown';

export const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPaperBooks().then((booksFromServer) => setBooks(booksFromServer));
  }, []);

  const query = useBookStore((state) => state.query);
  const cart = useBookStore((state) => state.cart);
  const favourites = useBookStore((state) => state.favourites);
  const { setQuery } = useBookStore();

  const totalCount = cart.reduce((sum, book) => sum + book.quantity, 0);
  const totalFavorites = favourites.length;

  const searchResults = getSearchResults(books, query);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setQuery]);

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
        'text-[#b3b2aa] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-[#b3b2aa] after:w-full after:scale-x-100 after:origin-center after:transition-transform after:duration-300':
          isActive,

        'text-white hover:text-[#313237] after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:bg-[#313237] after:w-full after:scale-x-0 after:origin-center after:transition-transform after:duration-300 group-hover:after:scale-x-100':
          !isActive,
      },
    );

  const baseIconClass =
    'flex items-center justify-center w-12 h-full xl:w-[64px] border-l border-[#E2E6E9] text-[#89939A] transition duration-200 hover:text-[#313237] group';
  const iconScaleClass =
    'transition duration-200 transform group-hover:scale-110';
  return (
    <div className="relative">
      <header className="flex items-center justify-between gap-6 w-full h-12 xl:h-16 bg-[#493929] fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="flex items-center w-full h-full gap-6">
          <Link
            aria-label="Go to Home page"
            to="/"
            className="flex items-center justify-center w-24 xl:w-32 h-full transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <img
              src="/books/img/nice-books-logo.png"
              alt="nice-books logo"
              className="h-[22px] xl:h-[28px] w-auto"
            />
          </Link>

          <nav className="hidden sm:flex items-center justify-center h-full gap-8 xl:gap-16">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/paperback" className={navLinkClass}>
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

        <div className="relative hidden xl:flex gap-4 pl-2" ref={dropdownRef}>
          <SearchBar />
          <SearchDropdown results={searchResults} />
          <CategoryDropdown />
        </div>

        <div className="flex h-full">
          <Button
            onClick={handleSearchToggle}
            className={cn(
              baseIconClass,
              'sm:flex xl:hidden hidden rounded-none',
            )}
            size="icon"
            variant="ghost"
          >
            <Search size={16} className={iconScaleClass} />
          </Button>

          <Link
            to="favourites"
            className={cn(baseIconClass, 'hidden sm:flex')}
            aria-label="Go to Favourites page"
          >
            <div className={cn('relative', iconScaleClass)}>
              <Heart size={16} />
              {totalFavorites > 0 && (
                <NotificationHeaderBtn counter={totalFavorites} />
              )}
            </div>
          </Link>

          <Link
            to="/cart"
            className={cn(baseIconClass, 'hidden sm:flex')}
            aria-label="Go to Cart page"
          >
            <div className={cn('relative', iconScaleClass)}>
              <ShoppingBag size={16} />
              {totalCount > 0 && <NotificationHeaderBtn counter={totalCount} />}
            </div>
          </Link>

          <Button
            onClick={handleMenuToggle}
            className={cn(baseIconClass, 'sm:hidden border-l-0')}
            size="icon"
            variant="ghost"
          >
            <Menu size={16} className={iconScaleClass} />
          </Button>
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
    </div>
  );
};
