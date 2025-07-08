import { BookAbout } from '../BookPage/components/BookAbout/BookAbout';
import { BookCharacteristics } from '../BookPage/components/BookCharacteristics/BookCharacteristics';
import { BookDetails } from '../BookPage/components/BookDetails/BookDetails';
import { BookGallery } from '../BookPage/components/BookGallery/BookGallery';

export const BookPage = () => {
  return (
    <div>
      <BookGallery />
      {/* images={book.images} */}
      <BookDetails />
      <BookAbout />
      <BookCharacteristics />
    </div>
  );
};
