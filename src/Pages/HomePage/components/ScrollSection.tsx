import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Frame from 'public/books/img/hero/letsexplore.png';

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

  return (
    <div ref={wrapperRef} className="wrapper relative max-w-screen z-[1]">
      <div className="content relative w-full overflow-x-hidden z-[1]">
        <section
          className="section hero w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/books/img/hero/backgroundwithwhite.png)',
          }}
        />
      </div>
      <div className="image-container absolute top-0 left-0 right-0 w-full h-screen overflow-hidden z-[2] [perspective:500px]">
        <img
          src={Frame}
          alt="image"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  );
};
