import BannerSlider from '@/Pages/HomePage/components/BannerSlider';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';
import { CategoriesGrid } from '@/Pages/HomePage/components/CategoriesGrid';
import { ScrollSection } from './components/ScrollSection';
import { useEffect, useState } from 'react';
import { Book } from '@/types/Book';
import { getPaperBooks } from '@/services/booksAPI';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { getNewestBooks } from '@/utils/getNewestBooks';
import { getRandomBooks } from '@/utils/getRandomBooks';

export const HomePage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getPaperBooks()
      .then(setBooks)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <BookLoader />;
  }
  return (
    <>
      <ScrollSection />
      <section className="relative z-[2]">
        <BannerSlider />
        <PaperBookSlider books={getNewestBooks(books)} title="New Books" />
        <CategoriesGrid />
        <PaperBookSlider books={getRandomBooks(books)} title="You might like" />
      </section>
    </>
  );
};
