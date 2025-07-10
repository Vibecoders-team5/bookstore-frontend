import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface BookGalleryProps {
  images: string[];
}

export function BookGallery({ images }: BookGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col-reverse sm:flex-row items-start w-full gap-4">
      <div className="w-full sm:w-20">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs, FreeMode]}
          freeMode
          watchSlidesProgress
          breakpoints={{
            0: {
              direction: 'horizontal',
              slidesPerView: 4,
              spaceBetween: 8,
            },
            640: {
              direction: 'vertical',
              slidesPerView: 6,
              spaceBetween: 8,
            },
          }}
          className="w-full h-20 sm:h-[520px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-[80px] h-[80px] flex items-center justify-center rounded-lg border border-[#E2E6E9] hover:border-[#313237] transition-all">
                <img
                  src={src}
                  alt={`thumb ${index}`}
                  className="w-[64px] h-[64px] object-contain rounded-md cursor-pointer"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs]}
        className="w-full max-w-[480px] aspect-[4/5] sm:h-[520px]"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={src}
                alt={`image ${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
