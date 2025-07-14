import { CatalogTemplate } from '@/components/sections/CatalogTemplate/CatalogTemplate';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useEffect } from 'react';

export const AudiobookPage = () => {
  const { audioBooks, isLoading, fetchAudioBooks } = useFetchBooksStore();

  useEffect(() => {
    fetchAudioBooks();
  }, [fetchAudioBooks]);

  return (
    <CatalogTemplate
      books={audioBooks}
      isLoading={isLoading}
      title={'Audiobooks'}
    />
  );
};
