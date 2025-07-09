import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';

export const AudiobookPage = () => {
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
      title={'Audiobooks'}
    />
  );
};
