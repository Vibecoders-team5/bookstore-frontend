import { Book } from '@/types/Book';

import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { useBookStore } from '@/store/useBookStore';

type Props = {
  book: Book;
};

export function BookDetails({ book }: Props) {
  const { addToCart, removeFromCart } = useBookStore();
  const cart = useBookStore((state) => state.cart);
  const isBookInCart = cart.some((item) => item.id === book.id);

  const toggleAddToCart = () => {
    return isBookInCart ? removeFromCart(book.id) : addToCart(book);
  };

  return (
    <div className="w-[400px] flex flex-col gap-6 text-[16px] text-[#313237]">
      <div>
        <p className="text-[#89939A] text-[16px] font-bold leading-[24px] mb-2">
          Category
        </p>
        {book.category && book.category.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {book.category.map((cat, index) => (
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
          <LanguageSelector book={book} />
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

          <div className="flex gap-2">
            <AddButton
              onClick={toggleAddToCart}
              isSelected={isBookInCart}
              size="bookPageAddButton"
            />
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
