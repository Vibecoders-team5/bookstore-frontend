import { useEffect, useState } from 'react';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';

export const PaperPage = () => {
  const [paperBooks, setPaperBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPaperBooks()
      .then((books) => setPaperBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CatalogTemplate
      books={paperBooks}
      isLoading={isLoading}
      title={'Paper books'}
    />
  );
};
