import { useEffect, useState } from 'react';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { BookCard } from '@/components/bloks/BookCard/BookCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type PaperBookSliderProps = {
  title?: string;
};

export const PaperBookSlider: React.FC<PaperBookSliderProps> = ({ title }) => {
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
    <Carousel className="max-w-[1136px] mx-auto mt-[80px]">
      <div className="flex items-center justify-between px-4 mb-[23px]">
        <h1 className="font-bold text-[2rem] text-[#313237]">{title}</h1>
        <div className="flex space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="-ml-4">
        {books.slice(0, 10).map((book) => (
          <CarouselItem
            key={book.slug}
            className="pl-4 basis-[25%] w-[272px] h-[506px]"
          >
            <div className="overflow-hidden">
              <BookCard book={book} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
