import { Book } from '@/types/Book';
import { useBookStore } from '@/store/useBookStore';
import { useTranslation } from 'react-i18next';

import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { formatListeningLength } from '../FormatListeningLength/formatListeningLength';
import { Minus, Plus } from 'lucide-react';

type Props = {
  book: Book;
};

export function BookDetails({ book }: Props) {
  const { t } = useTranslation();

  const bookDetailsData: [string, string | number | null][] = [
    [t('author'), book.author],
    [t('cover'), book.coverType ?? null],
    [
      t('listening'),
      book.listeningLength !== null && book.listeningLength !== undefined ?
        formatListeningLength(book.listeningLength)
      : null,
    ],
    [t('narrator'), book.narrator ?? null],
    [t('numberOfPages'), book.numberOfPages ?? null],
    [t('yearOfPublication'), book.publicationYear],
  ];

  const filteredDetails = bookDetailsData.filter(([, value]) => value !== null);

  const addToCart = useBookStore((state) => state.addToCart);
  const removeFromCart = useBookStore((state) => state.removeFromCart);
  const increaseQuantity = useBookStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBookStore((state) => state.decreaseQuantity);
  const addToFavorites = useBookStore((state) => state.addToFavorites);
  const removeFromFavorites = useBookStore(
    (state) => state.removeFromFavorites,
  );
  const cart = useBookStore((state) => state.cart);
  const favorites = useBookStore((state) => state.favorites);

  const isFavourite = favorites.some((fav) => fav.id === book.id);
  const cartItem = cart.find((item) => item.id === book.id);
  const quantity = cartItem?.quantity || 0;
  const isSelected = quantity > 0;

  const toggleAddToCart = () => {
    return isSelected ? removeFromCart(book.id) : addToCart(book);
  };

  const handlePlus = () => {
    if (quantity === 0) {
      addToCart(book);
    } else {
      increaseQuantity(book.id);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) decreaseQuantity(book.id);
    else if (quantity === 1) removeFromCart(book.id);
  };

  const toggleFavourite = () => {
    if (isFavourite) {
      removeFromFavorites(book);
    } else {
      addToFavorites(book);
    }
  };

  return (
    <div className="w-full max-w-[400px] mx-auto lg:mx-0 flex flex-col gap-6 text-[16px] text-custom-primary  dark:text-white">
      <div>
        <p className="text-custom-secondary  dark:text-white/80 text-[16px] font-bold leading-[24px] mb-2">
          {t('category')}
        </p>
        {book.category && book.category.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {book.category.slice(0, 6).map((cat, index) => (
              <p
                key={index}
                className="px-3 py-1 border border-custom-elements  dark:bg-white/20 rounded-md w-fit text-[14px] font-medium leading-[21px] text-custom-primary  dark:text-white/80"
              >
                {cat}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-custom-elements  pt-4">
        <p className="text-custom-secondary  dark:text-white/80 text-[16px] font-bold leading-[24px] mb-2">
          {t('selectlanguage')}
        </p>

        <div className="mb-4">
          <LanguageSelector />
        </div>

        <div className="border-t border-custom-elements pt-4">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[32px] font-bold leading-[41px]">
              ${book.priceDiscount || book.priceRegular}
            </p>
            {book.priceDiscount && (
              <p className="line-through text-custom-secondary text-[22px] font-medium leading-[41px]">
                ${book.priceRegular}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 w-full overflow-hidden">
            <AddButton
              onClick={toggleAddToCart}
              isSelected={isSelected}
              size="bookPageAddButton"
              className="dark:bg-white/40 dark:border dark:border-white/10 dark:hover:border-white/60 cursor-pointer"
            />

            <div className="flex items-center box-border border border-custom-elements rounded-md px-2">
              <button
                className="text-custom-icons hover:text-custom-primary dark:hover:text-white w-6.5 h-10 flex items-center justify-center"
                onClick={handleMinus}
                disabled={quantity === 0}
              >
                <Minus size={14} />
              </button>

              <span className="px-2">{quantity || 0}</span>

              <button
                className="text-custom-icons hover:text-custom-primary  dark:hover:text-white  w-6.5 h-10 flex items-center justify-center"
                onClick={handlePlus}
              >
                <Plus size={14} />
              </button>
            </div>

            <HeartButton onClick={toggleFavourite} isSelected={isFavourite} />
          </div>
        </div>
      </div>

      <div className="pt-[24px] text-custom-secondary text-[14px] font-medium leading-[21px]">
        {filteredDetails.map(([label, value], index) => (
          <div
            key={label}
            className={`flex justify-between py-1 ${
              index > 0 ? 'border-t border-custom-elements' : ''
            }`}
          >
            <span className="dark:text-[#ad9c89]">{label}</span>
            <span className="text-custom-primary text-[14px] dark:text-white/90">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
