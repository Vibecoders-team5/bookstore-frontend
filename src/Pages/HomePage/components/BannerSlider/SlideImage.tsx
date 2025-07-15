import { motion } from 'framer-motion';

type SlideImageProps = {
  srcDesktop: string;
  srcTablet: string;
  srcMobile: string;
  zIndex: number;
  opacityFrom: number;
  opacityTo: number;
  keyProp: string;
};

export const SlideImage = ({
  srcDesktop,
  srcTablet,
  srcMobile,
  zIndex,
  opacityFrom,
  opacityTo,
  keyProp,
}: SlideImageProps) => (
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
