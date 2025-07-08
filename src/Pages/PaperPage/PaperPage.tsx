import { BookList } from '@/components/sections/BookList/BookList';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';

export function PaperPage() {
  const [paperBooks, setPaperBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPaperBooks()
      .then((books) => setPaperBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <BookLoader />;
  }

  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <h1 className="h1">Paper Books</h1>
        <p className="body-text">{`${paperBooks.length} books`}</p>
      </div>
      <BookList books={paperBooks} />
    </div>
  );
}
