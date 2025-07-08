import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

import ConstitutionDay from 'public/books/img/testbanner1.png';
import Constitution from 'public/books/img/testbanner22.png';

const SLIDE_WIDTH = 1040;
const WRAPPER_WIDTH = 1136;
const SLIDE_HEIGHT = 400;
const WRAPPER_HEIGHT = 432;
const TRANSITION_DURATION = 0.7;

const images = [ConstitutionDay, Constitution];

const SlideImage = ({
  src,
  zIndex,
  opacityFrom,
  opacityTo,
  keyProp,
}: {
  src: string;
  zIndex: number;
  opacityFrom: number;
  opacityTo: number;
  keyProp: string;
}) => (
  <motion.img
    key={keyProp}
    src={src}
    initial={{ opacity: opacityFrom }}
    animate={{ opacity: opacityTo }}
    transition={{ duration: TRANSITION_DURATION, ease: 'easeInOut' }}
    className={`absolute top-0 left-0 w-full h-full object-cover z-${zIndex}`}
  />
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
    const timeout = setTimeout(
      () => setPrevSlide(null),
      TRANSITION_DURATION * 1000,
    );
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  return (
    <div
      className={`flex flex-col items-center max-w-[${WRAPPER_WIDTH}px] w-full mx-auto`}
    >
      <div
        className={`flex w-full h-[${WRAPPER_HEIGHT}px] items-center justify-between gap-2`}
      >
        <Button
          variant="ghost"
          onClick={goToPrev}
          className="z-30 w-12 h-12 bg-white p-2 flex items-center justify-center"
        >
          <ChevronLeft />
        </Button>

        <div
          className={`relative w-[${SLIDE_WIDTH}px] h-[${SLIDE_HEIGHT}px] overflow-hidden rounded-2xl`}
          style={{ backgroundColor: 'black' }}
        >
          {prevSlide !== null && (
            <SlideImage
              src={images[prevSlide]}
              zIndex={10}
              opacityFrom={1}
              opacityTo={0}
              keyProp={`prev-${prevSlide}`}
            />
          )}

          <SlideImage
            src={images[currentSlide]}
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
            className={`w-[14px] h-[4px] transition-colors duration-300 rounded-full ${
              index === currentSlide ? 'bg-[#313237]' : 'bg-[#E2E6E9]'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
