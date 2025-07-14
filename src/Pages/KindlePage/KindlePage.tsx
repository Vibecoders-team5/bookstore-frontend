import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const KindlePage = () => {
  const { kindleBooks, isLoading, fetchKindleBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchKindleBooks();
  }, [fetchKindleBooks]);

  return (
    <CatalogTemplate
      books={kindleBooks}
      isLoading={isLoading}
      title={t('kindleBooks')}
    />
  );
};
