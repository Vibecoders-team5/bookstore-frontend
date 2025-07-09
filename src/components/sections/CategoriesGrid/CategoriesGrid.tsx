import Banner1 from 'public/books/img/category-paperback.webp';
import Banner2 from 'public/books/img/category-audiobook.webp';
import Banner3 from 'public/books/img/category-kindle.webp';

export const CategoriesGrid = () => {
  return (
    <div className="w-[1136px] mx-auto mt-[80px]">
      <h1 className="font-bold text-[2rem] text-[#313237] mb-[23px] px-4">
        Shop by category
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <a
          href="#/paperback"
          className="block w-full aspect-[368/289] overflow-hidden rounded-xl"
        >
          <img
            src={Banner1}
            alt="Paper Books"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>

        <a
          href="#/audiobook"
          className="block w-full aspect-[368/289] overflow-hidden rounded-xl"
        >
          <img
            src={Banner2}
            alt="E-books"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>

        <a
          href="#/kindle"
          className="block w-full aspect-[368/289] overflow-hidden rounded-xl"
        >
          <img
            src={Banner3}
            alt="Audio Books"
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </a>
        <h2 className="text-3xl text-[#313237] font-semibold">Paper books</h2>
        <h2 className="text-3xl text-[#313237] font-semibold">Audiobooks</h2>
        <h2 className="text-3xl text-[#313237] font-semibold">Kindle books</h2>
        <h3 className="text-sm text-[#89939A] font-medium">10,305 books</h3>
        <h3 className="text-sm text-[#89939A] font-medium">10,305 books</h3>
        <h3 className="text-sm text-[#89939A] font-medium">10,305 books</h3>
      </div>
    </div>
  );
};
