import { useEffect, useState } from 'react';
import { getPaperBooks } from '@/services/booksAPI';
import { Book } from '@/types/Book';
import { BookLoader } from '@/components/ui/BookLoader/BookLoader';
import { BookCard } from '@/components/bloks/BookCard/BookCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function BooksSlider() {
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
    <Carousel className="max-w-[1136px] mx-auto">
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
}
