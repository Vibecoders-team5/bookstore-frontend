import { Book } from '@/types/Book';
import { BookCard } from '@/components/bloks/BookCard/BookCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

type PaperBookSliderProps = {
  books: Book[];
  title?: string;
};

export const PaperBookSlider: React.FC<PaperBookSliderProps> = ({
  books,
  title,
}) => {
  return (
    <Carousel className="max-w-284 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto mt-20 pb-8">
      <div className="flex items-center justify-between mb-[23px]">
        <h1 className="font-bold text-[2rem] text-[#313237]">{title}</h1>
        <div className="flex space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="flex sm:-ml-4 sm:justify-start justify-center">
        {books.map((book) => (
          <CarouselItem
            key={book.slug}
            className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <BookCard book={book} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
