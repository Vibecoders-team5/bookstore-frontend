import { BookCompactCard } from '@/components/bloks/BookCompactCard/BookCompactCard';
import { EmptyCart } from '@/Pages/CartPage/EmptyCart';
import { Book } from '@/types/Book';
import { CartSummary } from './CartSummary';
import { useBookStore } from '@/store/useBookStore';

export type CartItem = Book & { quantity: number };

export const CartPage = () => {
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
    <div className="px-4 sm:px-6 xl:px-8">
      {/* тимчасові падінги ^ */}
      <h1 className="text-[32px] sm:text-[48px] font-[700] mb-8">Cart</h1>
      {cart.length ?
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 xl:justify-center ">
          <div className="flex flex-col gap-4 flex-grow xl:max-w-[752px]">
            {cart.map((book) => (
              <BookCompactCard key={book.slug} book={book} showActions={true} />
            ))}
          </div>

          <CartSummary totalPrice={totalPrice} quantity={totalQuantity} />
        </div>
      : <EmptyCart />}
    </div>
  );
};
