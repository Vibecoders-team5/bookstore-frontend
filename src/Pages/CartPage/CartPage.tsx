import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useBookStore } from '@/store/useBookStore';

import { Book } from '@/types/Book';
import { BookCompactCard } from '@/components/bloks/BookCompactCard/BookCompactCard';
import { BackButton } from '@/components/ui/Buttons/BackButton';

import { CartSummary } from './components/CartSummary';
import { EmptyCart } from './components/EmptyCart';

export type CartItem = Book & { quantity: number };

export const CartPage = () => {
  const navigate = useNavigate();
  const cart = useBookStore((state) => state.cart);
  const { t } = useTranslation();

  const totalPrice = useMemo(
    () =>
      Math.round(
        cart.reduce(
          (sum, book) =>
            sum + (book.priceDiscount ?? book.priceRegular) * book.quantity,
          0,
        ) * 100,
      ) / 100,
    [cart],
  );

  const totalQuantity = useMemo(
    () => cart.reduce((sum, book) => sum + book.quantity, 0),
    [cart],
  );

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 xl:px-8 pt-25">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-8 sm:mb-10 pt-2">
          <h1 className="text-[36px] sm:text-5xl font-bold dark:text-white">
            {t('cart')}
          </h1>
          <p className="dark:text-white">{`${totalQuantity} ${t('items')}`}</p>
        </div>

        {cart.length ?
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:justify-center flex-shrink">
            <div className="flex flex-col gap-4 flex-1 min-w-75 lg:max-w-188 flex-shrink">
              {cart.map((book) => (
                <BookCompactCard
                  key={book.slug}
                  book={book}
                  showActions={true}
                />
              ))}
            </div>

            <CartSummary totalPrice={totalPrice} quantity={totalQuantity} />
          </div>
        : <EmptyCart />}
      </div>
    </div>
  );
};
