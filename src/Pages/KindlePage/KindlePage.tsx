import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';

export const KindlePage = () => {
  const { kindleBooks, isLoading, fetchKindleBooks } = useFetchBooksStore();

  useEffect(() => {
    fetchKindleBooks();
  }, [fetchKindleBooks]);

  return (
    <CatalogTemplate
      books={kindleBooks}
      isLoading={isLoading}
      title={'Kindle books'}
    />
  );
};
