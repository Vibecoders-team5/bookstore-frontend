import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AudiobookPage = () => {
  const { audioBooks, isLoading, fetchBooksByType } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchBooksByType('audio');
  }, [fetchBooksByType]);

  return (
    <CatalogTemplate
      books={audioBooks}
      isLoading={isLoading}
      title={t('books.audioBooks')}
    />
  );
};
