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
    <div className="py-[24px] space-y-[40px]">
      <div className="space-y-1">
        <BreadcrumbSection />
        <h1 className="text-[32px] font-bold leading-[44px] text-[#313237]">
          {book.name}
        </h1>
        <p className="text-[#89939A] text-base font-medium">{book.author}</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-12">
        <div className="flex-1 flex">
          <BookGallery images={imageUrls} />
        </div>
        <div className="w-[320px]">
          <BookDetails book={book} />
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-12">
        <div className="flex-1">
          <BookAbout />
        </div>
        <div className="w-[320px]">
          <BookCharacteristics />
        </div>
      </div>
    </div>
  );
};
