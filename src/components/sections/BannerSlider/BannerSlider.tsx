import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ConstitutionDayDesktop from 'public/books/img/testbanner1.png';
import ConstitutionDayTablet from 'public/books/img/testbannerTablet1.png';

import ConstitutionDesktop from 'public/books/img/testbanner22.png';
import ConstitutionTablet from 'public/books/img/testbannerTablet2.png';

const images = [
  {
    desktop: ConstitutionDayDesktop,
    tablet: ConstitutionDayTablet,
  },
  {
    desktop: ConstitutionDesktop,
    tablet: ConstitutionTablet,
  },
];

const SlideImage = ({
  srcDesktop,
  srcTablet,
  zIndex,
  opacityFrom,
  opacityTo,
  keyProp,
}: {
  srcDesktop: string;
  srcTablet: string;
  zIndex: number;
  opacityFrom: number;
  opacityTo: number;
  keyProp: string;
}) => (
  <motion.picture
    key={keyProp}
    initial={{ opacity: opacityFrom }}
    animate={{ opacity: opacityTo }}
    transition={{ duration: 0.7, ease: 'easeInOut' }}
    className={`absolute top-0 left-0 w-full h-full z-${zIndex}`}
  >
    <source srcSet={srcTablet} media="(max-width: 1023px)" />
    <img src={srcDesktop} alt="" className="w-full h-full object-cover" />
  </motion.picture>
);

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);

  const goTo = (index: number) => {
    if (index !== currentSlide) {
      setPrevSlide(currentSlide);
      setCurrentSlide((index + images.length) % images.length);
    }
  };

  const goToNext = () => goTo(currentSlide + 1);
  const goToPrev = () => goTo(currentSlide - 1);

  useEffect(() => {
    const timeout = setTimeout(() => setPrevSlide(null), 700);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center max-w-[1136px] w-full mx-auto">
      <div className="flex w-full h-[432px] items-center justify-between gap-2">
        <Button
          variant="ghost"
          onClick={goToPrev}
          className="z-30 w-12 h-12 bg-white p-2 flex items-center justify-center"
        >
          <ChevronLeft />
        </Button>

        <div className="relative h-[336px] lg:h-[400px] overflow-hidden rounded-2xl bg-black w-[490px] lg:w-[1040px]">
          {prevSlide !== null && (
            <SlideImage
              srcDesktop={images[prevSlide].desktop}
              srcTablet={images[prevSlide].tablet}
              zIndex={10}
              opacityFrom={1}
              opacityTo={0}
              keyProp={`prev-${prevSlide}`}
            />
          )}

          <SlideImage
            srcDesktop={images[currentSlide].desktop}
            srcTablet={images[currentSlide].tablet}
            zIndex={20}
            opacityFrom={0}
            opacityTo={1}
            keyProp={`current-${currentSlide}`}
          />
        </div>

        <Button
          variant="ghost"
          onClick={goToNext}
          className="z-30 w-12 h-12 bg-white p-2 flex items-center justify-center"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-[14px] h-[4px] transition-colors duration-300 ${
              index === currentSlide ? 'bg-[#313237]' : 'bg-[#E2E6E9]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
