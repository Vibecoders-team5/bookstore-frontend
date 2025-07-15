import { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { getNewestBooks } from '@/utils/getNewestBooks';
import { getRandomBooks } from '@/utils/getRandomBooks';

import BannerSlider from '@/Pages/HomePage/components/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/Pages/HomePage/components/CategoriesGrid';
import { ScrollSection } from './components/ScrollSection';
import { MovingRows } from './components/MovingRows';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';

export const HomePage = () => {
  const { allBooks, isLoading, fetchAllBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const newestBooks = useMemo(() => getNewestBooks(allBooks), [allBooks]);
  const randomBooks = useMemo(() => getRandomBooks(allBooks), [allBooks]);

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
        <PaperBookSlider books={randomBooks} title={t('UMayLike')} />
      </section>
    </>
  );
};
