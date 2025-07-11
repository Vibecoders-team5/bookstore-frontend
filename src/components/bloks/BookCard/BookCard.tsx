import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { HeadphonesRound } from '@/components/ui/Icons/HeadphonesRound';
import { Book } from '@/types/Book';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useBookStore } from '@/store/useBookStore';

type BookCardProps = {
  book: Book;
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart, removeFromCart, addToFavourites, removeFromFavourites } =
    useBookStore();

  const cart = useBookStore((state) => state.cart);
  const favourites = useBookStore((state) => state.favourites);

  const someCallback = (item: Book) => item.id === book.id;

  const isBookInCart = cart.some(someCallback);
  const isBookInFavourites = favourites.some(someCallback);

  const toggleAddToCart = () => {
    return isBookInCart ? removeFromCart(book.id) : addToCart(book);
  };

  const toggleAddToFavourites = () => {
    return isBookInFavourites ?
        removeFromFavourites(book)
      : addToFavourites(book);
  };

  return (
    <div className="w-full h-full lg:max-w-[272px] flex flex-col p-8 gap-4 rounded-lg border-1 border-gray-200 hover:shadow-lg bg-white">
      <Link to={`/${book.type}/${book.slug}`} className="flex justify-center">
        <div className="relative w-52 h-66">
          <HeadphonesRound />
          <img
            className="w-full h-full object-contain rounded-md"
            src={`/books/${book.images[0]}`}
            alt={book.name}
          />
        </div>
      </Link>

      <div className="grid grid-cols-[1fr_auto] sm:grid-cols-1 gap-4 sm:gap-2 w-full">
        <Link
          to={`/${book.type}/${book.slug}`}
          className="flex flex-col min-w-0"
        >
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <h5 className="h5 truncate ">{book.name}</h5>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>{book.name}</p>
              </TooltipContent>
            </Tooltip>
            <p className="body-text">{book.author}</p>
          </div>
        </Link>

        <div className="flex flex-col items-end sm:items-start flex-shrink-0">
          {book.priceDiscount ?
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center">
              <h3 className="text-[20px] sm:text-[22px] font-[700]">{`$${book.priceDiscount}`}</h3>
              <h4 className="text-[16px] sm:text-[20px] font-[600] line-through text-gray-400">{`$${book.priceRegular}`}</h4>
            </div>
          : <h3 className="h3">{`$${book.priceRegular}`}</h3>}
          <div className="inline-flex gap-1.5">
            <Truck className="text-green-600 w-[22px] h-[22px]" />
            <p className="btn-text text-green-600">In stock</p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <AddButton
          onClick={toggleAddToCart}
          isSelected={isBookInCart}
          size={'customAddButton'}
          className="flex-1"
        />
        <HeartButton
          onClick={toggleAddToFavourites}
          isSelected={isBookInFavourites}
        />
      </div>
    </div>
  );
};

// back-up
{
  /* <div className="w-full max-w-[272px] relative flex flex-1 flex-col p-8 gap-4 rounded-lg border-1 border-gray-200 hover:shadow-lg bg-white">
  <HeadphonesRound />
  <Link to={`/${book.type}/${book.slug}`}>
    <div className="w-full h-[263px]">
      <img
        className="w-full h-full object-contain"
        src={`/books/${book.images[0]}`}
        alt={book.name}
      />
    </div>
  </Link>
  <div className="flex flex-col gap-2">
    <Link to={`/${book.type}/${book.slug}`}>
      <div>
        <Tooltip>
          <TooltipTrigger asChild>
            <h5 className="h5 truncate max-w-[200px]">{book.name}</h5>
          </TooltipTrigger>
          <TooltipContent className="bg-black text-white">
            <p>{book.name}</p>
          </TooltipContent>
        </Tooltip>
        <p className="body-text">{book.author}</p>
      </div>
    </Link>
    <div className="flex flex-col">
      {book.priceDiscount ?
        <div className="flex items-center gap-2">
          <h3 className="h3">{`$${book.priceDiscount}`}</h3>
          <h4 className="h4 line-through text-gray-400">{`$${book.priceRegular}`}</h4>
        </div>
      : <h3 className="h3">{`$${book.priceRegular}`}</h3>}
      <div className="inline-flex gap-1.5">
        <Truck className="text-green-600 w-[22px] h-[22px]" />
        <p className="btn-text text-green-600">In stock</p>
      </div>
    </div>
  </div>
  <div className="inline-flex gap-2">
    <AddButton
      onClick={toggleAddToCart}
      isSelected={isBookInCart}
      size={'customAddButton'}
    />
    <HeartButton
      onClick={toggleAddToFavourites}
      isSelected={isBookInFavourites}
    />
  </div>
</div>; */
}
