import { cn } from '@/lib/utils';
import { NavList } from './NavList';
import { Book } from '@/types/Book';
import { SearchBar } from './SearchBar';
import { SearchDropdown } from './SearchDropdown';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { NotificationHeaderIcon } from '@/components/ui/Icons/NotificationHeader';
import { useEffect } from 'react';
import { FocusTrap } from 'focus-trap-react';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  searchResults: Book[];
  dropdownRef: React.RefObject<HTMLDivElement | null>;
  totalCount: number;
  totalFavorites: number;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    'relative h-full flex items-center justify-center text-[24px] font-[500] transition-colors duration-200 after:content-[""] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:w-full after:origin-center after:transition-transform after:duration-300 after:bg-custom-primary dark:after:bg-white/80',
    {
      'text-custom-primary dark:text-white/80 after:scale-x-100': isActive,
      'text-custom-secondary dark:text-white/40 hover:text-custom-primary dark:hover:text-white/80 after:scale-x-0 hover:after:scale-x-100':
        !isActive,
    },
  );

export const MobileMenu = ({
  isOpen,
  onClose,
  searchResults,
  dropdownRef,
  totalCount,
  totalFavorites,
}: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderLinkIcon = (
    to: string,
    Icon: React.ElementType,
    count: number,
    label: string,
  ) => (
    <Link
      to={to}
      aria-label={label}
      className="flex-1 border-r border-custom-elements dark:bg-white/40 last:border-r-0"
    >
      <div className="flex flex-col items-center justify-center py-6">
        <div className="relative">
          <Icon size={20} className="text-custom-primary dark:text-white" />
          {count > 0 && <NotificationHeaderIcon counter={count} />}
        </div>
      </div>
    </Link>
  );

  return (
    <FocusTrap
      active={isOpen}
      focusTrapOptions={{
        fallbackFocus: '#mobile-menu-root',
        clickOutsideDeactivates: true,
      }}
    >
      <div
        id="mobile-menu-root"
        className="fixed top-12 left-0 w-full h-[calc(100vh-48px)] bg-white dark:bg-[#443e32] z-40 sm:hidden pt-6 flex flex-col gap-24"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative flex gap-4 px-4" ref={dropdownRef}>
          <SearchBar />
          <SearchDropdown results={searchResults} />
        </div>

        <nav className="flex flex-col items-center gap-4 ">
          <NavList navLinkClass={navLinkClass} layout="vertical" />
        </nav>

        <div className="flex w-full mt-auto border-t border-custom-elements">
          {renderLinkIcon(
            '/favorites',
            Heart,
            totalFavorites,
            'Go to Favorites page',
          )}
          {renderLinkIcon('/cart', ShoppingBag, totalCount, 'Go to Cart page')}
        </div>
      </div>
    </FocusTrap>
  );
};
