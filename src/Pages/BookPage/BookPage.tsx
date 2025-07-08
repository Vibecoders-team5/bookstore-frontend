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
    <div className="mx-auto px-4 space-y-12">
      <div className="space-y-1">
        <BreadcrumbSection />
        <h1 className="text-[32px] font-bold leading-[44px] text-[#313237]">
          {book.name}
        </h1>
        <p className="text-[#89939A] text-base font-medium">{book.author}</p>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
        <div className="xl:col-span-5 flex justify-center">
          <BookGallery images={imageUrls} />
        </div>
        <div className="xl:col-span-7">
          <BookDetails book={book} />
        </div>
      </div>
      <div className="xl:col-span-12 grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-7">
          <BookAbout />
        </div>
        <div className="xl:col-span-5">
          <BookCharacteristics />
        </div>
      </div>
    </div>
  );
};
