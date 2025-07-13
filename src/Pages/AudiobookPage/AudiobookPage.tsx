import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { getAudioBooks } from '@/services/booksAPI';

import { Book } from '@/types/Book';
import { useEffect, useState } from 'react';

export const AudiobookPage = () => {
  const [audioBooks, setAudioBooks] = useState<Book[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAudioBooks()
      .then((books) => setAudioBooks(books))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <CatalogTemplate
      books={audioBooks}
      isLoading={isLoading}
      title={'Audiobooks'}
    />
  );
};
