import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { getKindleBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';

export const KindlePage = () => {
  const [kindleBooks, setKindleBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getKindleBooks()
      .then((books) => setKindleBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CatalogTemplate
      books={kindleBooks}
      isLoading={isLoading}
      title={'Kindle books'}
    />
  );
};
