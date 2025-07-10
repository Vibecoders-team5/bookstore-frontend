import { BookCompactCard } from '@/components/bloks/BookCompactCard/BookCompactCard';
import { EmptyCart } from '@/Pages/CartPage/EmptyCart';
import { Book } from '@/types/Book';
import { CartSummary } from './CartSummary';
import { useBookStore } from '@/store/useBookStore';
import { BackButton } from '@/components/ui/Buttons/BackButton';
import { useNavigate } from 'react-router-dom';

export type CartItem = Book & { quantity: number };

export const CartPage = () => {
  const navigate = useNavigate();
  const cart = useBookStore((state) => state.cart);
  const totalPrice =
    Math.round(
      cart.reduce(
        (sum, book) =>
          sum + (book.priceDiscount ?? book.priceRegular) * book.quantity,
        0,
      ) * 100,
    ) / 100;

  const totalQuantity = cart.reduce((sum, book) => sum + book.quantity, 0);

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 xl:px-8 pt-10 pb-8 sm:pb-16">
      <div className="w-full max-w-284 min-w-0">
        <BackButton onClick={() => navigate(-1)} />

        <div className="mb-8 sm:mb-10 pt-4">
          <h1 className="text-[32px] sm:text-[48px] font-[700]">Cart</h1>
          <p>{`${totalQuantity} items`}</p>
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
