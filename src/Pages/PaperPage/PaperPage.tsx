import { useEffect } from 'react';
import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useTranslation } from 'react-i18next';

export const PaperPage = () => {
  const { paperBooks, isLoading, fetchPaperBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchPaperBooks();
  }, [fetchPaperBooks]);

  return (
    <CatalogTemplate
      books={paperBooks}
      isLoading={isLoading}
      title={t('paperBooks')}
    />
  );
};
