// import BannerSlider from '@/components/sections/BannerSlider/BannerSlider';
// import { PaperBookSlider } from '@/components/sections/BooksSliders/PaperBookSlider';

import { BookCompactCard } from '@/components/bloks/BookCompactCard/BookCompactCard';
import { EmptyCart } from '@/Pages/CartPage/EmptyCart';
import { Book } from '@/types/Book';
import { useState } from 'react';
import { CartSummary } from './CartSummary';
// import { useBookStore } from '@/store/useBookStore';

export type CartItem = Book & { quantity: number };

export const CartPage = () => {
  // const { removeFromCart, addToCart } = useBookStore();
  // const cart = useBookStore(state => state.cart);
  const raw = JSON.parse(localStorage.getItem('cart') || '[]');
  const normalized = raw.map((book: CartItem) => ({
    ...book,
    quantity: book.quantity || 1,
  }));
  const [booksInCart, setBooksInCart] = useState<CartItem[]>(normalized);
  const totalPrice =
    Math.round(
      booksInCart.reduce(
        (sum, book) =>
          sum + (book.priceDiscount ?? book.priceRegular) * book.quantity,
        0,
      ) * 100,
    ) / 100;

  const totalQuantity = booksInCart.reduce(
    (sum, book) => sum + book.quantity,
    0,
  );

  const handleRemove = (id: string) => {
    const updated = booksInCart.filter((book) => book.id !== id);
    setBooksInCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    // removeFromCart(book);
  };

  const handleIncrement = (id: string) => {
    const updated = booksInCart.map((book) =>
      book.id === id && book.quantity < 10 ?
        { ...book, quantity: book.quantity + 1 }
      : book,
    );
    setBooksInCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    // removeFromCart(book);
  };

  const handleDecrement = (id: string) => {
    const book = booksInCart.find((b) => b.id === id);

    if (book?.quantity === 1) {
      handleRemove(id);
      return;
    }

    const updated = booksInCart.map((book) =>
      book.id === id ? { ...book, quantity: book.quantity - 1 } : book,
    );

    setBooksInCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  return (
    <div className="px-4 sm:px-6 xl:px-8">
      {/* тимчасові падінги ^ */}
      <h1 className="text-[32px] sm:text-[48px] font-[700] mb-8">Cart</h1>
      {/* <BannerSlider />
      <PaperBookSlider /> */}
      {booksInCart.length ?
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-4 xl:justify-center ">
          <div className="flex flex-col gap-4 flex-grow max-w-[752px]">
            {booksInCart.map((book) => (
              <BookCompactCard
                key={book.slug}
                book={book}
                showActions={true}
                onRemove={handleRemove}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
              />
            ))}
          </div>

          <CartSummary totalPrice={totalPrice} quantity={totalQuantity} />
        </div>
      : <EmptyCart />}
    </div>
  );
};
