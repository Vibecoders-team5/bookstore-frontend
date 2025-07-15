import { useFetchBooksStore } from '@/store/useFetchBooksStore';
import { useTranslation } from 'react-i18next';

const Banner1 = '/books/img/categories/paperbookcategory.jpg';
const Banner2 = '/books/img/categories/audiobookcategory.jpg';
const Banner3 = '/books/img/categories/kindlebookcategory.jpg';

export const CategoriesGrid = () => {
  const { paperBooks, kindleBooks, audioBooks } = useFetchBooksStore();
  const { t } = useTranslation();

  const categories = [
    {
      image: Banner1,
      link: '#/paperback',
      title: t('paperBooks'),
      subtitle: `${paperBooks.length} ${t('items')}`,
    },
    {
      image: Banner2,
      link: '#/audiobook',
      title: t('audioBooks'),
      subtitle: `${audioBooks.length} ${t('items')}`,
    },
    {
      image: Banner3,
      link: '#/kindle',
      title: t('kindleBooks'),
      subtitle: `${kindleBooks.length} ${t('items')}`,
    },
  ];

  return (
    <div className="max-w-[1136px] flex flex-wrap mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto mt-12">
      <h1 className="font-bold text-[2rem] text-custom-primary dark:text-white mb-[23px]">
        {t('shopByCat')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {categories.map(({ image, link, title, subtitle }) => (
          <a
            key={title}
            href={link}
            className="block w-full overflow-hidden group"
          >
            <div className="aspect-square sm:aspect-[368/289] overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <h2 className="mt-4 text-5 text-custom-primary dark:text-white font-semibold">
              {title}
            </h2>
            <h3 className="mt-1 text-sm text-custom-secondary dark:text-white/50 font-medium">
              {subtitle}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};
