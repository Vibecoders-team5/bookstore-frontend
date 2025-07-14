import BannerSlider from '@/Pages/HomePage/components/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/Pages/HomePage/components/CategoriesGrid';
import { ScrollSection } from './components/ScrollSection';
import { useEffect } from 'react';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { getNewestBooks } from '@/utils/getNewestBooks';
import { getRandomBooks } from '@/utils/getRandomBooks';
import { MovingRows } from './components/MovingRows';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';

export const HomePage = () => {
  const { allBooks, isLoading, fetchAllBooks } = useFetchBooksStore();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  if (isLoading) {
    return <BookLoader />;
  }
  return (
    <>
      <ScrollSection />
      <section className="relative z-[2]">
        <BannerSlider />
        <PaperBookSlider books={getNewestBooks(allBooks)} title="New Books" />
        <MovingRows />
        <CategoriesGrid />
        <PaperBookSlider
          books={getRandomBooks(allBooks)}
          title="You might like"
        />
      </section>
    </>
  );
};
