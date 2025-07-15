import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useCategories } from '@/data/categories';

export const CategoriesGrid = () => {
  const categories = useCategories();
  const [animationClass, setAnimationClass] = useState(
    'opacity-0 -translate-x-full',
  );
  const { t } = useTranslation();

  const handleScroll = () => {
    const element = document.getElementById('categoriesGrid');
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        setAnimationClass('opacity-100 translate-x-0');
      } else {
        setAnimationClass('opacity-0 -translate-x-full');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="categoriesGrid"
      className={`max-w-[1136px] flex flex-wrap mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto mt-12 transition-all duration-[3.5s] ease-in-out ${animationClass}`}
    >
      <h1 className="font-bold text-[2rem] text-[#313237] dark:text-white mb-6">
        {t('shopByCat')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {categories.map(({ video, link, title, subtitle }) => (
          <a
            key={title}
            href={link}
            className="block w-full overflow-hidden group"
          >
            <div className="aspect-square sm:aspect-[368/289] overflow-hidden rounded-lg">
              <video
                src={video}
                title={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                autoPlay
                loop
                muted
              />
            </div>

            <h2 className="mt-4 text-5 text-[#313237] dark:text-white font-semibold">
              {title}
            </h2>
            <h3 className="mt-1 text-sm text-[#89939A] dark:text-white/50 font-medium">
              {subtitle}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};
