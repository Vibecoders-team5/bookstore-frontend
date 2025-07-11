import { Book } from '@/types/Book';

import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { useBookStore } from '@/store/useBookStore';
import { Minus, Plus } from 'lucide-react';

type Props = {
  book: Book;
};

export function BookDetails({ book }: Props) {
  const cart = useBookStore((state) => state.cart);
  const addToCart = useBookStore((state) => state.addToCart);
  const removeFromCart = useBookStore((state) => state.removeFromCart);
  const increaseQuantity = useBookStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBookStore((state) => state.decreaseQuantity);

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

  return (
    <div className="w-full max-w-[400px] mx-auto lg:mx-0 flex flex-col gap-6 text-[16px] text-[#313237]">
      <div>
        <p className="text-[#89939A] text-[16px] font-bold leading-[24px] mb-2">
          Category
        </p>
        {book.category && book.category.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {book.category.slice(0, 6).map((cat, index) => (
              <p
                key={index}
                className="px-3 py-1 border border-[#E2E6E9] rounded-md w-fit text-[14px] font-medium leading-[21px] text-[#313237]"
              >
                {cat}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#E2E6E9] pt-4">
        <p className="text-[#89939A] text-[16px] font-bold leading-[24px] mb-2">
          Select language
        </p>

        <div className="mb-4">
          <LanguageSelector />
        </div>

        <div className="border-t border-[#E2E6E9] pt-4">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[32px] font-bold leading-[41px]">
              ${book.priceDiscount || book.priceRegular}
            </p>
            {book.priceDiscount && (
              <p className="line-through text-[#89939A] text-[22px] font-medium leading-[41px]">
                ${book.priceRegular}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <AddButton
              onClick={toggleAddToCart}
              isSelected={isSelected}
              size="bookPageAddButton"
            />

            {/* {cartItem && ( */}
            <div className="flex items-center border border-[#E2E6E9] rounded-md px-2">
              <button
                className="text-[#B4BDC3] hover:text-[#313237] w-6.5 h-10 flex items-center justify-center"
                onClick={handleMinus}
                disabled={quantity === 0}
              >
                <Minus size={14} />
              </button>

              <span className="px-2">{quantity || 0}</span>

              <button
                className="text-[#B4BDC3] hover:text-[#313237] w-6.5 h-10 flex items-center justify-center"
                onClick={handlePlus}
              >
                <Plus size={14} />
              </button>
            </div>

            <HeartButton />
          </div>
        </div>
      </div>

      <div className="pt-[24px] text-[#89939A] text-[14px] font-medium leading-[21px]">
        <div className="flex justify-between py-1">
          <span>Author</span>
          <span className="text-[#313237] text-[14px]">{book.author}</span>
        </div>
        <div className="border-t border-[#E2E6E9] flex justify-between py-1">
          <span>Cover type</span>
          <span className="text-[#313237]">{book.coverType}</span>
        </div>
        <div className="border-t border-[#E2E6E9] flex justify-between py-1">
          <span>Number of pages</span>
          <span className="text-[#313237]">{book.numberOfPages}</span>
        </div>
        <div className="border-t border-[#E2E6E9] flex justify-between py-1">
          <span>Year of publication</span>
          <span className="text-[#313237] text-[14px]">
            {book.publicationYear}
          </span>
        </div>
      </div>
    </div>
  );
}
