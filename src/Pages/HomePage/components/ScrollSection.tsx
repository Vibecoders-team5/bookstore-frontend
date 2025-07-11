import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
    <div ref={wrapperRef} className="wrapper relative w-full z-[1]">
      <div className="content relative w-full overflow-x-hidden z-[1]">
        <section
          className="section hero w-full h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/books/img/bg-library.jpg)',
          }}
        />
        <section className="flex items-center justify-center h-screen text-white text-[8vw] font-bold text-center">
          New Worlds
        </section>
      </div>
      <div className="image-container absolute top-0 left-0 right-0 w-full h-screen overflow-hidden z-[2] [perspective:500px]">
        <img
          src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
          alt="image"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-[5vw] font-bold select-none pointer-events-none leading-none text-center">
            <div className="-translate-x-[3vw]">New</div>
            <div>Worlds</div>
          </div>
        </div>
      </div>
    </div>
  );
};
