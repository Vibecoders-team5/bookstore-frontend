import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CartItem } from '@/Pages';
import { useBookStore } from '@/store/useBookStore';
import { Book } from '@/types/Book';
import { Minus, Plus, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type BookCompactCardProps = {
  book: CartItem | Book;
  showActions: boolean;
};

export const BookCompactCard = ({
  book,
  showActions,
}: BookCompactCardProps) => {
  const navigate = useNavigate();
  const removeFromCart = useBookStore((state) => state.removeFromCart);
  const increaseQuantity = useBookStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBookStore((state) => state.decreaseQuantity);
  const { setQuery } = useBookStore();

  const isCartItem = (book: Book | CartItem): book is CartItem => {
    return 'quantity' in book;
  };

  const handleCardClick = () => {
    navigate(`/${book.type}/${book.slug}`);
    setQuery('');
  };

  return (
    <article
      onClick={handleCardClick}
      className={cn(
        'flex justify-between gap-4 cursor-pointer sm:gap-8 border border-[#E2E6E9] bg-white hover:shadow-md mb-1',
        showActions ?
          'flex-col sm:flex-row p-4 sm:px-6 rounded-[16px]'
        : 'flex-row p-1 sm:px-2 rounded-[10px]',
      )}
    >
      <div className="flex items-center gap-4 sm:gap-6 min-w-0 cursor-pointer">
        <div className="flex items-center gap-4 sm:gap-6">
          {showActions && (
            <Button
              className="text-[#B4BDC3] cursor-pointer hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={(event) => {
                removeFromCart(book.id);
                event.stopPropagation();
              }}
            >
              <X size={16} />
            </Button>
          )}

          <div
            className={cn('flex', {
              'w-14 h-14': !showActions,
              'w-20 h-20': showActions,
            })}
          >
            <img
              className="w-full h-full object-contain"
              src={`/books/${book.images[0]}`}
              alt={book.name}
            />
          </div>
        </div>

        <div className="flex-grow min-w-0">
          <h5 className="h5 text-[#313237] truncate">{book.name}</h5>
          <p className="body-text text-[#89939A] truncate">{book.author}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 xl:gap-6">
        {showActions && isCartItem(book) && (
          <div
            className="flex justify-between items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <Button
              className="w-8 h-8 cursor-pointer text-[#B4BDC3] hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={() => decreaseQuantity(book.id)}
            >
              <Minus size={16} />
            </Button>

            <span className="body-text text-[#313237] px-3">
              {book.quantity}
            </span>

            <Button
              className="w-8 h-8 cursor-pointer text-[#B4BDC3] hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={() => increaseQuantity(book.id)}
            >
              <Plus size={16} />
            </Button>
          </div>
        )}

        <h3
          className={cn('font-[600] text-[#313237] w-20 text-right', {
            'text-[20px] sm:text-[22px]': showActions,
            'text-[16px]': !showActions,
          })}
        >
          {`$${book.priceDiscount ? book.priceDiscount : book.priceRegular}`}
        </h3>
      </div>
    </article>
  );
};
