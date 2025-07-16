import { BookCompactCard } from '@/components/bloks/BookCompactCard/BookCompactCard';
import { useBookStore } from '@/store/useBookStore';
import { Book } from '@/types/Book';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

type SearchDropdownProps = {
  results: Book[];
};

export const SearchDropdown: React.FC<SearchDropdownProps> = ({ results }) => {
  const query = useBookStore((state) => state.query);
  const { t } = useTranslation();
  const hasResults = results.length > 0;
  const isOpen = query.length > 0;

  return (
    <div
      className={cn(
        'absolute z-50 top-11 xl:top-13 sm:top-26 right-1 xl:right-46 sm:right-36 w-full sm:w-[482px] flex flex-col px-2 bg-white/60 rounded-md shadow-md overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out',
        isOpen ?
          'max-h-[350px] opacity-100 pointer-events-auto overflow-y-auto'
        : 'max-h-0 opacity-0 pointer-events-none overflow-hidden',
      )}
    >
      {hasResults ?
        results.map((book) => (
          <BookCompactCard
            key={book.slug}
            book={book}
            showActions={false}
            query={query}
          />
        ))
      : <div className="flex flex-col items-center justify-center text-center gap-4 py-20">
          <img
            src="/books/img/no-result.webp"
            alt="Results not found"
            className="w-40"
          />
          <p className="text-custom-secondary text-base sm:text-lg">
            {t('noResults')}
          </p>
        </div>
      }
    </div>
  );
};
