import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { getNewestBooks } from '@/utils/getNewestBooks';
import { getRecommendedBooks } from '@/utils/getRecommendedBooks';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { BookSlider } from '@/components/sections/BooksSlider/BookSlider';

import {
  CategoriesGrid,
  ScrollSection,
  MovingRows,
  BannerSlider,
} from './components/index';

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
        <BookSlider books={newestBooks} title={t('books.newBooks')} />
        <MovingRows />
        <CategoriesGrid />
        <BookSlider books={recommendedBooks} title={t('books.youMayLike')} />
      </section>
    </>
  );
};
