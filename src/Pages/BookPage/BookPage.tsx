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

  useEffect(() => {
    if (!bookSlug || !type) return;

    getBookBySlug(type, bookSlug)
      .then(setBook)
      .catch((err) => {
        console.error(err);
      });
  }, [bookSlug, type]);

  if (!book) {
    return <BookLoader />;
  }

  const imageUrls = book.images.map((p) => `/books/${p}`);

  return (
    <div className="flex flex-col py-[24px]">
      <div className="mb-[24px]">
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

      <div className="flex">
        <div className="flex mr-[150px]">
          <BookGallery images={imageUrls} />
        </div>
        <div className="w-[320px] relative">
          <BookDetails book={book} />
          <div className="absolute top-0 right-0 text-sm text-gray-400"></div>
        </div>
      </div>

      <div className="flex mt-16 gap-[80px] items-start">
        <BookAbout book={book} />
        <BookCharacteristics book={book} />
      </div>
      <PaperBookSlider />
    </div>
  );
};
