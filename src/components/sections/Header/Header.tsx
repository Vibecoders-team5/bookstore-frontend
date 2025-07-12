import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

import { Heart, Menu, Search, ShoppingBag, SquareX, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { NotificationHeaderBtn } from '@/components/ui/Icons/NotificationHeaderBtn';
import { useBookStore } from '@/store/useBookStore';
import { getSearchResults } from '@/utils/getSearchResults';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { SearchDropdown } from './components/SearchDropdown';
import { CategoryDropdown } from './components/CategoryDropdown';
import { SearchBar } from './components/SearchBar';
import { MobileMenu } from './components/MobileMenu';
import { DesktopNav } from './components/DescktopNav';

export const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPaperBooks().then((booksFromServer) => setBooks(booksFromServer));
  }, []);

  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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

  const baseIconClass =
    'flex items-center justify-center w-12 h-full lg:w-[64px] border-l border-[#E2E6E9] text-[#89939A] transition duration-200 hover:text-[#313237] group';
  const iconScaleClass =
    'transition duration-200 transform group-hover:scale-110';
  return (
    <div className="relative">
      <header className="flex items-center justify-between gap-6 w-full h-12 lg:h-16 bg-[#493929] fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="flex items-center w-full h-full gap-6">
          <Link
            aria-label="Go to Home page"
            to="/"
            className="flex items-center justify-center w-24 xl:w-32 h-full transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
          >
            <img
              src="/books/img/nice-books-logo.png"
              alt="nice-books logo"
              className="h-[22px] xl:h-[37px] w-auto"
            />
          </Link>

          <DesktopNav />
        </div>

        <div
          className="relative hidden lg:flex lg:justify-end w-full gap-4 pl-2"
          ref={dropdownRef}
        >
          <SearchBar />
          <SearchDropdown results={searchResults} />
          <CategoryDropdown />
        </div>

        <div className="flex h-full">
          <Button
            onClick={handleSearchToggle}
            className={cn(
              baseIconClass,
              'sm:flex lg:hidden hidden rounded-none',
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
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className={cn(baseIconClass, 'sm:hidden border-l-0')}
            size="icon"
            variant="ghost"
          >
            {isMobileMenuOpen ?
              <X size={16} className={iconScaleClass} />
            : <Menu size={16} className={iconScaleClass} />}
          </Button>
        </div>
      </header>

      {isSearchVisible && (
        <div>
          <div className="fixed top-[54px] right-[148px] z-50 bg-white/90 rounded-md shadow-md px-2 py-2 w-[478px] flex items-center gap-2">
            <button onClick={() => setIsSearchVisible(false)}>
              <SquareX className="opacity-40 hover:opacity-80 size-7" />
            </button>
            <SearchBar />
          </div>
          <SearchDropdown results={searchResults} />
        </div>
      )}

      <MobileMenu
        key={location.pathname}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        searchResults={searchResults}
        dropdownRef={dropdownRef}
        totalCount={totalCount}
        totalFavorites={totalFavorites}
      />
    </div>
  );
};
