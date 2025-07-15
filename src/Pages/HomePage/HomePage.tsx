import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { getNewestBooks } from '@/utils/getNewestBooks';
import { getRecommendedBooks } from '@/utils/getRecommendedBooks';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';

import BannerSlider from '@/Pages/HomePage/components/BannerSlider/BannerSlider';
import { CategoriesGrid, ScrollSection, MovingRows } from './components/index';

export const HomePage = () => {
  const { allBooks, isLoading, fetchAllBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const newestBooks = useMemo(() => getNewestBooks(allBooks), [allBooks]);
  const recommendedBooks = useMemo(
    () => getRecommendedBooks(allBooks),
    [allBooks],
  );

  if (isLoading) {
    return <BookLoader />;
  }

  return (
    <>
      <ScrollSection />
      <section className="relative z-[2]">
        <BannerSlider />
        <PaperBookSlider books={newestBooks} title={t('newBooks')} />
        <MovingRows />
        <CategoriesGrid />
        <PaperBookSlider books={recommendedBooks} title={t('UMayLike')} />
      </section>
    </>
  );
};
