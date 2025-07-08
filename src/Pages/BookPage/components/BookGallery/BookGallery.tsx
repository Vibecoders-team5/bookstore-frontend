import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export function BookGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const images = [
    '/books/img/paperback/chip-war/uk/00.webp',
    '/books/img/paperback/chip-war/uk/01.webp',
    '/books/img/paperback/chip-war/uk/02.webp',
    '/books/img/paperback/chip-war/uk/03.webp',
    '/books/img/paperback/chip-war/uk/04.webp',
  ];

  return (
    <div className="flex gap-8 w-fit">
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={5}
        spaceBetween={8}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs, FreeMode]}
        className="w-[80px] h-[520px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-[80px] h-[80px] overflow-hidden rounded-lg border border-transparent hover:border-gray-300 transition-all">
              <img
                src={src}
                alt={`thumb ${index}`}
                className="rounded-md object-contain w-full h-[80px] cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="w-[332px] h-[600px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`image ${index}`}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
