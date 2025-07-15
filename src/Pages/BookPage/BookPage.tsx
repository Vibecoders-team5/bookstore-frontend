import { useEffect, useMemo } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import { getBookAndVariants } from '@/utils/getBookAndVariants';
import { useBookStore } from '@/store/useBookStore';

import { BookAbout } from '../BookPage/components/BookAbout/BookAbout';
import { BookCharacteristics } from '../BookPage/components/BookCharacteristics/BookCharacteristics';
import { BookDetails } from '../BookPage/components/BookDetails/BookDetails';
import { BookGallery } from '../BookPage/components/BookGallery/BookGallery';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { BreadcrumbSection } from './components/BreadcrumbSection/BreadcrumbSection';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';

import { getRandomBooks } from '@/utils/getRandomBooks';
import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useTranslation } from 'react-i18next';

export const BookPage: React.FC = () => {
  const { setCurrentBook, setBookVariants, currentBook: book } = useBookStore();
  const { allBooks, isLoading, fetchAllBooks } = useFetchBooksStore();
  const { t } = useTranslation();
  const { bookSlug } = useParams<{ bookSlug: string }>();
  const type = useMatch('/:type/:bookSlug')?.params.type as
    | 'paperback'
    | 'kindle'
    | 'audiobook';

  useEffect(() => {
    if (!bookSlug || !type) return;
    fetchAllBooks();

    getBookAndVariants(type, bookSlug)
      .then(({ current, variants }) => {
        setCurrentBook(current);
        setBookVariants(variants);
      })
      .catch(console.error);
  }, [type, bookSlug, setCurrentBook, setBookVariants, fetchAllBooks]);

  const randomBooks = useMemo(() => {
    return getRandomBooks(allBooks);
  }, [allBooks]);

  if (isLoading || !book) return <BookLoader />;

  const imageUrls = book.images.map((p) => `/books/${p}`);

  return (
    <div className="w-full px-4 pt-14 sm:pt-24 pb-6">
      <article className="mx-auto w-full max-w-[1150px] flex flex-col">
        <nav aria-label="Breadcrumb" className="mb-6">
          <BreadcrumbSection
            type={type}
            category={
              Array.isArray(book.category) ? book.category[0] : book.category
            }
            bookName={book.name}
          />
        </nav>

        <header className="mb-10">
          <h1 className="text-[32px] font-bold leading-[41px] text-custom-primary dark:text-white">
            {book.name}
          </h1>
          <p className="text-custom-secondary dark:text-white text-[14px] leading-[21px] font-medium">
            {book.author}
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-16 mb-16 justify-items-center lg:justify-items-start">
          <BookGallery images={imageUrls} />
          <BookDetails book={book} />
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-16 mb-16 justify-items-center lg:justify-items-start">
          <BookAbout book={book} />
          <BookCharacteristics book={book} />
        </section>

        <PaperBookSlider books={randomBooks} title={t('UMayLike')} />
      </article>
    </div>
  );
};
