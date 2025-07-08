import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

// interface BookGalleryProps {
//   images: string[];
// }
// { images }: BookGalleryProps

export function BookGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = [
    '/books/img/paperback/chip-war/uk/00.webp',
    '/books/img/paperback/chip-war/uk/01.webp',
    '/books/img/paperback/chip-war/uk/02.webp',
    '/books/img/paperback/chip-war/uk/03.webp',
    '/books/img/paperback/chip-war/uk/04.webp',
    '/books/img/paperback/chip-war/uk/05.webp',
  ];

  return (
    <div className="flex gap-8 w-fit">
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={6}
        spaceBetween={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode]}
        className="w-[80px] h-[520px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-lg border border-[#E2E6E9] hover:border-[#313237] swiper-slide-thumb-active:border-[#313237] transition-all">
              <img
                src={src}
                alt={`thumb ${index}`}
                className="w-[64px] h-[64px] object-contain rounded-md cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="w-[480px] h-[520px] flex items-center justify-center"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={src}
                alt={`image ${index}`}
                className="w-full h-full object-contain rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
