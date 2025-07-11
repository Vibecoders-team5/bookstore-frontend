import { useEffect, useState } from 'react';
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

export const BookPage: React.FC = () => {
  const { setCurrentBook, setBookVariants, currentBook: book } = useBookStore();
  const [isLoading, setLoading] = useState(false);
  const { bookSlug } = useParams<{ bookSlug: string }>();
  const type = useMatch('/:type/:bookSlug')?.params.type as
    | 'paperback'
    | 'kindle'
    | 'audiobook';

  useEffect(() => {
    if (!bookSlug || !type) return;
    setLoading(true);

    getBookAndVariants(type, bookSlug)
      .then(({ current, variants }) => {
        setCurrentBook(current);
        setBookVariants(variants);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type, bookSlug, setCurrentBook, setBookVariants]);

  if (isLoading || !book) return <BookLoader />;

  const imageUrls = book.images.map((p) => `/books/${p}`);

  return (
    <div className="w-full px-4 py-6">
      <div className="mx-auto w-full max-w-[1150px] flex flex-col">
        <div className="mb-6">
          <BreadcrumbSection
            type={type}
            category={
              Array.isArray(book.category) ? book.category[0] : book.category
            }
            bookName={book.name}
          />
        </div>

        <div className="mb-10">
          <h1 className="text-[32px] font-bold leading-[41px] text-[#313237]">
            {book.name}
          </h1>
          <p className="text-[#89939A] text-[14px] leading-[21px] font-medium">
            {book.author}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-16 mb-16 justify-items-center lg:justify-items-start">
          <BookGallery images={imageUrls} />
          <BookDetails book={book} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-12 gap-y-16 mb-16 justify-items-center lg:justify-items-start">
          <BookAbout book={book} />
          <BookCharacteristics book={book} />
        </div>

        <PaperBookSlider title="You might like" />
      </div>
    </div>
  );
};
