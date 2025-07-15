import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Frame from '/books/img/hero/letsexplore.png';
import TabletFrame from '/books/img/hero/letsexploreTablet.png';
import MobileFrame from '/books/img/hero/letsexploreMobile.png';

gsap.registerPlugin(ScrollTrigger);

export const ScrollSection = () => {
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top top',
            end: '+=150%',
            pin: true,
            scrub: true,
            // markers: true,
          },
        })
        .to('.image-container img', {
          scale: 2,
          z: 350,
          transformOrigin: 'center center',
          ease: 'power1.inOut',
        })
        .to(
          '.section.hero',
          {
            scale: 1.1,
            transformOrigin: 'center center',
            ease: 'power1.inOut',
          },
          '<',
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  const imgClasses = 'w-full h-full object-cover object-center';

  const responsiveImages = [
    { src: Frame, className: `${imgClasses} hidden lg:block` },
    { src: TabletFrame, className: `${imgClasses} hidden sm:block lg:hidden` },
    { src: MobileFrame, className: `${imgClasses} block sm:hidden` },
  ];

  return (
    <div ref={wrapperRef} className="wrapper relative max-w-screen z-[1]">
      <div className="content relative w-full overflow-x-hidden z-[1]">
        <section className="section hero w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/books/img/hero/backgroundwithwhite.png')] dark:bg-[url('/books/img/hero/backgroundwithbrown.jpg')]" />
      </div>

      <div className="image-container absolute top-0 left-0 right-0 w-full h-screen overflow-hidden z-[2] [perspective:500px]">
        {responsiveImages.map(({ src, className }, index) => (
          <img key={index} src={src} alt="hero frame" className={className} />
        ))}
      </div>
    </div>
  );
};
