import { useSearchParams } from 'react-router-dom';

import { getVisibleBooks } from '@/utils/getVisibleBooks';
import { Book } from '@/types/Book';
import { BookList } from '@/components/sections/BookList/BookList';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { DropdownSortBy } from './DropdownSortBy';
import { DropdownItemsOnPage } from './DropdownItemsOnPage';
import { PaginationBlock } from './PaginationBlock';
import { useTranslation } from 'react-i18next';
import { SortDirectionToggle } from './SortDirectionToggle';

type CatalogTemplateProps = {
  books: Book[];
  isLoading: boolean;
  title: string;
};

const DEFAULT_SORT = 'newest';
const DEFAULT_ORDER = 'asc';

export const CatalogTemplate: React.FC<CatalogTemplateProps> = ({
  books,
  isLoading,
  title,
}) => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const currentSort = searchParams.get('sort') ?? DEFAULT_SORT;
  const currentOrder = searchParams.get('order') ?? DEFAULT_ORDER;
  const currentPerPage = searchParams.get('perPage') || '16';
  const currentPage = searchParams.get('page') || null;
  const booksLength = books.length;
  const shouldPaginationShow =
    currentPerPage !== 'all' && currentPerPage !== null;

  const visibleBooks = getVisibleBooks(
    books,
    currentSort,
    currentOrder,
    currentPerPage,
    currentPage,
  );
  return (
    <div className="w-full flex justify-center pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-284 min-w-0">
        <div className="flex flex-col gap-2 my-10 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold dark:text-white">
            {title}
          </h1>
          <p className="body-text dark:text-white">{`${booksLength} ${t('items')}`}</p>
        </div>

        <div className="flex gap-4 mb-6 items-baseline-last">
          <DropdownSortBy />
          <SortDirectionToggle />
          <DropdownItemsOnPage />
        </div>
        {isLoading ?
          <BookLoader />
        : <>
            <BookList books={visibleBooks} />
            {shouldPaginationShow && (
              <div className="w-full flex justify-center pt-10">
                <PaginationBlock
                  totalBooks={booksLength}
                  perPage={currentPerPage}
                />
              </div>
            )}
          </>
        }
      </div>
    </div>
  );
};
