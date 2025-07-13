import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ConstitutionDayDesktop from '/books/img/tetsbanner1.png';
import ConstitutionDayTablet from '/books/img/testbannerTablet1.png';

import ConstitutionDesktop from '/books/img/testbanner22.png';
import ConstitutionTablet from '/books/img/testbannerTablet2.png';

import ConstitutionDesktop3 from '/books/img/testbanner3.png';

const images = [
  {
    desktop: ConstitutionDayDesktop,
    tablet: ConstitutionDayTablet,
  },
  {
    desktop: ConstitutionDesktop,
    tablet: ConstitutionTablet,
  },
  {
    desktop: ConstitutionDesktop3,
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
  srcTablet?: string;
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

  const goTo = useCallback(
    (index: number) => {
      if (index !== currentSlide) {
        setPrevSlide(currentSlide);
        setCurrentSlide((index + images.length) % images.length);
      }
    },
    [currentSlide],
  );

  const goToNext = useCallback(() => {
    goTo(currentSlide + 1);
  }, [goTo, currentSlide]);

  const goToPrev = () => goTo(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [goToNext]);

  useEffect(() => {
    const timeout = setTimeout(() => setPrevSlide(null), 700);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div className="flex mt-[32px] flex-col items-center max-w-[1136px] w-full mx-auto">
      <div className="flex w-full h-[432px] items-center justify-between gap-2">
        <Button
          variant="ghost"
          onClick={goToPrev}
          className="z-30 w-12 h-[320px] bg-white p-2 flex items-center justify-center"
        >
          <ChevronLeft />
        </Button>

        <a
          href="#/paperback"
          className="relative h-[336px] lg:h-[400px] overflow-hidden rounded-2xl bg-black w-[490px] lg:w-[1040px]"
        >
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
            // srcTablet={images[currentSlide].tablet}
            zIndex={20}
            opacityFrom={0}
            opacityTo={1}
            keyProp={`current-${currentSlide}`}
          />
        </a>

        <Button
          variant="ghost"
          onClick={goToNext}
          className="z-30 w-12 h-[320px] bg-white p-2 flex items-center justify-center"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex justify-center gap-2 -mt-[15px]">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 group`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`w-[14px] h-[4px] ${
                index === currentSlide ? 'bg-[#313237]' : 'bg-[#E2E6E9]'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
