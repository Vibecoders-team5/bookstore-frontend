import { BookList } from '@/components/sections/BookList/BookList';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';
import { DropdownSortBy } from './DropdownSortBy';
import { DropdownItemsOnPage } from './DropdownItemsOnPage';
import { getVisibleBooks } from '@/utils/getVisibleBooks';
import { useSearchParams } from 'react-router-dom';
import { PaginationBlock } from './PaginationBlock';

export function PaperPage() {
  const [paperBooks, setPaperBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const currentSort = searchParams.get('sort');
  const currentPerPage = searchParams.get('perPage') || '16';
  const currentPage = searchParams.get('page') || null;
  const booksLength = paperBooks.length;
  const shouldPagginationShow =
    currentPerPage !== 'all' && currentPerPage !== null;

  useEffect(() => {
    setIsLoading(true);
    getPaperBooks()
      .then((books) => setPaperBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  const visibleBooks = getVisibleBooks(
    paperBooks,
    currentSort,
    currentPerPage,
    currentPage,
  );

  if (isLoading) {
    return <BookLoader />;
  }

  return (
    <div className="w-full flex justify-center pt-16">
      <div className="w-full max-w-284 min-w-0">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="h1">Paper Books</h1>
          <p className="body-text">{`${booksLength} books`}</p>
        </div>
        <div className="flex gap-4 mb-6">
          <DropdownSortBy />
          <DropdownItemsOnPage />
        </div>
        <BookList books={visibleBooks} />
        {shouldPagginationShow && (
          <div className="w-full flex justify-center">
            <PaginationBlock
              totalBooks={booksLength}
              perPage={currentPerPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
