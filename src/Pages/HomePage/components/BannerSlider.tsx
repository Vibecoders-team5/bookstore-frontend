import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ConstitutionDayDesktop from '/books/img/banner/tetsbanner1.webp';
import ConstitutionDayTablet from '/books/img/banner/bannerTablet1.webp';
import ConstitutionDayMobile from '/books/img/banner/mobileBanner1.webp';

import AuthorDesktop from '/books/img/banner/testbanner22.webp';
import AuthorTablet from '/books/img/banner/bannerTablet2.webp';
import AuthorMobile from '/books/img/banner/mobileBanner2.webp';

import BestsellersDesktop from '/books/img/banner/testbanner3.webp';
import BestsellersTablet from '/books/img/banner/bannerTablet3.webp';
import BestsellersMobile from '/books/img/banner/mobileBanner3.webp';

const images = [
  {
    desktop: ConstitutionDayDesktop,
    tablet: ConstitutionDayTablet,
    mobile: ConstitutionDayMobile,
  },
  {
    desktop: AuthorDesktop,
    tablet: AuthorTablet,
    mobile: AuthorMobile,
  },
  {
    desktop: BestsellersDesktop,
    tablet: BestsellersTablet,
    mobile: BestsellersMobile,
  },
];

const SlideImage = ({
  srcDesktop,
  srcTablet,
  srcMobile,
  zIndex,
  opacityFrom,
  opacityTo,
  keyProp,
}: {
  srcDesktop: string;
  srcTablet: string;
  srcMobile: string;
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
    className={`absolute top-0 left-0 w-full h-full z-[${zIndex}]`}
  >
    <source srcSet={srcMobile} media="(max-width: 639px)" />
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
    <div className="flex mt-8 flex-col items-center max-w-[1136px] w-full mx-auto">
      <div className="relative flex w-full items-center justify-between gap-2 h-[100vw] sm:h-108">
        <Button
          variant="ghost"
          onClick={goToPrev}
          className="hidden sm:flex z-30 w-12 h-full dark:text-white bg-white dark:bg-[#443e32] p-2 items-center justify-center"
        >
          <ChevronLeft />
        </Button>

        <a
          href="#/paperback"
          className="relative overflow-hidden bg-black 
        w-full h-[100vw] sm:h-84 lg:h-100 
        rounded-none sm:rounded-2xl"
        >
          {prevSlide !== null && (
            <SlideImage
              srcDesktop={images[prevSlide].desktop}
              srcTablet={images[prevSlide].tablet}
              srcMobile={images[currentSlide].mobile}
              zIndex={10}
              opacityFrom={1}
              opacityTo={0}
              keyProp={`prev-${prevSlide}`}
            />
          )}

          <SlideImage
            srcDesktop={images[currentSlide].desktop}
            srcTablet={images[currentSlide].tablet}
            srcMobile={images[currentSlide].mobile}
            zIndex={20}
            opacityFrom={0}
            opacityTo={1}
            keyProp={`current-${currentSlide}`}
          />
        </a>

        <Button
          variant="ghost"
          onClick={goToNext}
          className="hidden sm:flex z-30 w-12 h-full bg-white dark:bg-[#443e32] dark:text-white p-2 items-center justify-center"
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-5 h-5 flex items-center justify-center transition-colors duration-300 group`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`w-[14px] h-[4px] ${
                index === currentSlide ?
                  'bg-custom-primary dark:bg-custom-elements'
                : 'bg-custom-elements dark:bg-brown-dark'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
