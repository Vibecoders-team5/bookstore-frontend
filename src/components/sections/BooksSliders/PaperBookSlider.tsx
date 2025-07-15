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
    <Carousel
      className="max-w-284 mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto mt-20 pb-8"
      opts={{
        align: 'start',
        loop: true,
        containScroll: 'keepSnaps',
        dragFree: false,
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-bold text-[2rem] text-[#313237] dark:text-white">
          {title}
        </h1>
        <div className="flex space-x-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>

      <CarouselContent className="flex sm:justify-start">
        {books.map((book) => (
          <CarouselItem
            key={book.slug}
            className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4  md:min-w-[288px] lg:min-w-[288px]"
          >
            <BookCard book={book} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
