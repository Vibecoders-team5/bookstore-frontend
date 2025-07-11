import { useSearchParams } from 'react-router-dom';

import { getVisibleBooks } from '@/utils/getVisibleBooks';
import { Book } from '@/types/Book';
import { BookList } from '@/components/sections/BookList/BookList';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { DropdownSortBy } from './DropdownSortBy';
import { DropdownItemsOnPage } from './DropdownItemsOnPage';
import { PaginationBlock } from './PaginationBlock';

type CatalogTemplateProps = {
  books: Book[];
  isLoading: boolean;
  title: string;
};

export const CatalogTemplate: React.FC<CatalogTemplateProps> = ({
  books,
  isLoading,
  title,
}) => {
  const [searchParams] = useSearchParams();

  const currentSort = searchParams.get('sort');
  const currentPerPage = searchParams.get('perPage') || '16';
  const currentPage = searchParams.get('page') || null;
  const booksLength = books.length;
  const shouldPagginationShow =
    currentPerPage !== 'all' && currentPerPage !== null;

  const visibleBooks = getVisibleBooks(
    books,
    currentSort,
    currentPerPage,
    currentPage,
  );
  return (
    <div className="w-full flex justify-center pt-8 sm:pt-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-284 min-w-0">
        <div className="flex flex-col gap-2 my-10 sm:mb-10">
          <h1 className="text-[32px] sm:text-[48px] font-[700]">{title}</h1>
          <p className="body-text">{`${booksLength} books`}</p>
        </div>

        <div className="flex gap-4 mb-6">
          <DropdownSortBy />
          <DropdownItemsOnPage />
        </div>
        {isLoading ?
          <BookLoader />
        : <>
            <BookList books={visibleBooks} />
            {shouldPagginationShow && (
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
