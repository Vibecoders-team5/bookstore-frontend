const Banner1 = 'books/img/category-paperback.webp';
const Banner2 = 'books/img/category-audiobook.webp';
const Banner3 = 'books/img/category-kindle.webp';

const categories = [
  {
    image: Banner1,
    link: '#/paperback',
    title: 'Paper books',
    subtitle: '10,305 books',
  },
  {
    image: Banner2,
    link: '#/audiobook',
    title: 'Audiobooks',
    subtitle: '10,305 books',
  },
  {
    image: Banner3,
    link: '#/kindle',
    title: 'Kindle books',
    subtitle: '10,305 books',
  },
];

export const CategoriesGrid = () => {
  return (
    <div className="max-w-[1136px] flex flex-wrap mx-4 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-auto mt-12">
      <h1 className="font-bold text-[2rem] text-[#313237] mb-[23px]">
        Shop by category
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

            <h2 className="mt-4 text-5 text-[#313237] font-semibold">
              {title}
            </h2>
            <h3 className="mt-1 text-sm text-[#89939A] font-medium">
              {subtitle}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
};
