import { useState, useEffect, useCallback, useRef } from 'react';
import { banners } from '@/data/banners';
import { SlideImage } from './SlideImage';
import SliderControls from './SliderControls';

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const goTo = useCallback(
    (index: number) => {
      if (index !== currentSlide) {
        setPrevSlide(currentSlide);
        setCurrentSlide((index + banners.length) % banners.length);
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.01 },
    );

    const sectionNode = sectionRef.current;

    if (sectionNode) {
      observer.observe(sectionNode);
    }
    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex mt-8 flex-col items-center max-w-[1136px] w-full mx-auto transition-all duration-[1s] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-60'
      }`}
    >
      <div className="relative flex w-full items-center justify-between gap-2 h-[100vw] sm:h-108">
        <SliderControls goToPrev={goToPrev} showNextButton={false} />

        <a
          href="#/paperback"
          className="relative overflow-hidden bg-black w-full h-[100vw] sm:h-84 lg:h-100 rounded-none sm:rounded-2xl"
        >
          {prevSlide !== null && (
            <SlideImage
              srcDesktop={banners[prevSlide].desktop}
              srcTablet={banners[prevSlide].tablet}
              srcMobile={banners[currentSlide].mobile}
              zIndex={10}
              opacityFrom={1}
              opacityTo={0}
              keyProp={`prev-${prevSlide}`}
            />
          )}

          <SlideImage
            srcDesktop={banners[currentSlide].desktop}
            srcTablet={banners[currentSlide].tablet}
            srcMobile={banners[currentSlide].mobile}
            zIndex={20}
            opacityFrom={0}
            opacityTo={1}
            keyProp={`current-${currentSlide}`}
          />
        </a>

        <SliderControls goToNext={goToNext} showPrevButton={false} />
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-5 h-5 flex items-center justify-center transition-colors group`}
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
