import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getBookBySlug } from '@/services/getBookBySlug';
import { Book } from '@/types/Book';

import { BookAbout } from '../BookPage/components/BookAbout/BookAbout';
import { BookCharacteristics } from '../BookPage/components/BookCharacteristics/BookCharacteristics';
import { BookDetails } from '../BookPage/components/BookDetails/BookDetails';
import { BookGallery } from '../BookPage/components/BookGallery/BookGallery';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { BreadcrumbSection } from './components/BreadcrumbSection/BreadcrumbSection';
import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';

export const BookPage: React.FC = () => {
  const { bookSlug } = useParams<{ bookSlug: string }>();
  const location = useLocation();
  const [book, setBook] = useState<Book | null>(null);

  const type = location.pathname.split('/')[1] as
    | 'paperback'
    | 'kindle'
    | 'audiobook';

  {
    /* перепрацювати */
  }

  useEffect(() => {
    if (!bookSlug || !type) return;

    getBookBySlug(type, bookSlug)
      .then(setBook)
      .catch((err) => {
        console.error(err);
      });
  }, [bookSlug, type]);

  if (!book) return <BookLoader />;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-16">
          <BookGallery images={imageUrls} />
          <div>
            <BookDetails book={book} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-16">
          <BookAbout book={book} />
          <BookCharacteristics book={book} />
        </div>

        <PaperBookSlider title="You might like" />
      </div>
    </div>
  );
};
