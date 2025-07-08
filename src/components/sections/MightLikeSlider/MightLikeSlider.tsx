import { BookCard } from '@/components/bloks/BookCard/BookCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export function CarouselSpacing() {
  const images = [
    '/books/img/paperback/chip-war/uk/00.webp',
    '/books/img/paperback/graphic-design-the-new-basics/uk/00.webp',
    '/books/img/paperback/emotional-intelligence/uk/00.webp',
    '/books/img/paperback/dont-make-me-think/uk/00.webp',
    '/books/img/paperback/graphic-design-the-new-basics/uk/00.webp',
    '/books/img/paperback/clean-architecture/uk/00.webp',
    '/books/img/paperback/clean-code/uk/00.webp',
  ];

  return (
    <Carousel className="w-full max-w-[1136px] mx-auto">
      <CarouselContent className="-ml-4">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="pl-4 basis-[25%] w-[272px] h-[506px]"
          >
            <div className="overflow-hidden">
              <BookCard
                image={image}
                imgSize="max-w-[208px] h-[263px] mx-auto"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
