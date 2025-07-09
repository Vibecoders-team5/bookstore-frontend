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
    <div className="flex gap-8 w-fit">
      <Swiper
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={6}
        spaceBetween={8}
        freeMode
        watchSlidesProgress
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
        className="w-[480px] h-[520px]"
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
