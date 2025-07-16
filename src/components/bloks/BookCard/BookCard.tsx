import { Link } from 'react-router-dom';
import gsap from 'gsap';

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
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { useRefStore } from '@/store/useRefStore';

type BookCardProps = {
  book: Book;
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const {
    cart,
    favorites,
    addToCart,
    removeFromCart,
    addToFavorites,
    removeFromFavorites,
  } = useBookStore();

  const { cartIconRef, favIconRef, burgIconRef } = useRefStore();

  const { t } = useTranslation();

  const cardRef = useRef<HTMLDivElement>(null);

  const phoneOffset = window.innerWidth < 640;

  const animateToTarget = (targetRef: React.RefObject<HTMLDivElement>) => {
    const card = cardRef.current;
    const target = targetRef?.current;

    if (!card || !target) {
      return;
    }

    const cardRect = card.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const clone = card.cloneNode(true) as HTMLDivElement;

    Object.assign(clone.style, {
      position: 'fixed',
      top: `${cardRect.top}px`,
      left: `${cardRect.left}px`,
      width: `${cardRect.width}px`,
      height: `${cardRect.height}px`,
      zIndex: '1000',
      pointerEvents: 'none',
      transition: 'none',
    });

    document.body.appendChild(clone);

    gsap.to(clone, {
      top: targetRect.top,
      left: targetRect.left,
      width: targetRect.width,
      height: targetRect.height,
      scale: 0.3,
      opacity: 0.3,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: () => {
        clone.remove();
      },
    });
  };

  const someCallback = (item: Book) => item.id === book.id;

  const isBookInCart = cart.some(someCallback);
  const isBookInFavorites = favorites.some(someCallback);

  const toggleAddToCart = () => {
    if (isBookInCart) {
      removeFromCart(book.id);
    } else {
      addToCart(book);
      animateToTarget(
        phoneOffset ?
          (burgIconRef as React.RefObject<HTMLDivElement>)
        : (cartIconRef as React.RefObject<HTMLDivElement>),
      );
    }
  };

  const toggleAddToFavorites = () => {
    if (isBookInFavorites) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
      animateToTarget(
        phoneOffset ?
          (burgIconRef as React.RefObject<HTMLDivElement>)
        : (favIconRef as React.RefObject<HTMLDivElement>),
      );
    }
  };

  return (
    <div className="dark:bg-brown-dark w-full h-full lg:max-w-[272px] flex flex-col p-8 gap-4 rounded-lg border-1 border-gray-200 dark:border-brown-dark hover:shadow-lg hover:scale-[1.02] bg-white transition-transform duration-300 ease-in-out">
      <Link to={`/${book.type}/${book.slug}`} className="flex justify-center">
        <div ref={cardRef} className="relative w-52 h-66">
          {book.type === 'audiobook' && <HeadphonesRound />}
          {book.type === 'kindle' && (
            <>
              <img
                className="w-full h-full object-contain"
                src="/books/img/audiobook/2.webp"
                alt="iPad container"
              />
              <img
                className="absolute top-[8.7%] left-[10.5%] w-[79.5%] h-[82%] object-cover"
                src={`/books/${book.images[0]}`}
                alt={book.name}
              />
            </>
          )}

          {book.type !== 'kindle' && (
            <img
              src={`/books/${book.images[0]}`}
              alt={book.name}
              className="w-full h-full object-contain rounded-md"
            />
          )}
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
                <h5 className="h5 truncate dark:text-white">{book.name}</h5>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>{book.name}</p>
              </TooltipContent>
            </Tooltip>
            <p className="body-text dark:text-[#ddd5cc]">{book.author}</p>
          </div>
        </Link>

        <div className="flex flex-col items-end sm:items-start flex-shrink-0 min-h-14">
          {book.priceDiscount ?
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-start sm:items-center h-15 sm:h-auto">
              <h3 className="text-[20px] sm:text-[22px] font-[700] dark:text-white">{`$${book.priceDiscount}`}</h3>
              <h4 className="text-[16px] sm:text-[20px] font-[600] line-through text-gray-400 dark:text-[#7e746a]">{`$${book.priceRegular}`}</h4>
            </div>
          : <h3 className="h3 dark:text-white h-15 sm:h-auto">{`$${book.priceRegular}`}</h3>
          }
          <div className="inline-flex gap-1.5">
            <Truck className="text-custom-accent dark:text-[#93785c] w-[22px] h-[22px]" />
            <p className="btn-text text-custom-accent dark:text-[#93785c] ">
              {t('inStock')}
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 w-full">
        <AddButton
          onClick={toggleAddToCart}
          isSelected={isBookInCart}
          size={'customAddButton'}
          className="flex-1 dark:bg-white/40 dark:border dark:border-white/10 dark:hover:border-white/60"
        />
        <HeartButton
          onClick={toggleAddToFavorites}
          isSelected={isBookInFavorites}
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
      onClick={toggleAddToFavorites}
      isSelected={isBookInFavorites}
    />
  </div>
</div>; */
}
