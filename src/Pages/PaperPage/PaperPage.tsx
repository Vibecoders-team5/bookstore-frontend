import { useEffect } from 'react';
import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';

export const PaperPage = () => {
  const { paperBooks, isLoading, fetchPaperBooks } = useFetchBooksStore();

  useEffect(() => {
    fetchPaperBooks();
  }, [fetchPaperBooks]);

  return (
    <CatalogTemplate
      books={paperBooks}
      isLoading={isLoading}
      title={'Paper books'}
    />
  );
};
