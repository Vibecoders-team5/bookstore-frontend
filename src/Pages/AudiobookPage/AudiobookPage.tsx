import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AudiobookPage = () => {
  const { audioBooks, isLoading, fetchAudioBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchAudioBooks();
  }, [fetchAudioBooks]);

  return (
    <CatalogTemplate
      books={audioBooks}
      isLoading={isLoading}
      title={t('audioBooks')}
    />
  );
};
