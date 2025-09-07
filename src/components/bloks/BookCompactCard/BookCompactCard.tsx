import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useBookStore } from '@/store/useBookStore';

import { cn } from '@/lib/utils';
import { highlightMatches } from '@/utils/highlightMatches';
import { Book, CartItem } from '@/types/Book';

import { Button } from '@/components/ui/button';
import { QuantityControls } from './components/QuantityControls';

type BookCompactCardProps = {
  book: CartItem | Book;
  showActions: boolean;
  query?: string;
};

export const BookCompactCard = ({
  book,
  showActions,
  query,
}: BookCompactCardProps) => {
  const navigate = useNavigate();
  const { removeFromCart, setQuery } = useBookStore();

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
        'flex justify-between gap-4 cursor-pointer sm:gap-8 border border-custom-elements dark:border-brown-dark bg-white dark:bg-brown-dark hover:shadow-md mb-1',
        showActions ?
          'flex-col sm:flex-row p-4 sm:px-6 rounded-[16px]'
        : 'flex-row p-1 sm:px-2 rounded-[10px]',
      )}
    >
      <div className="flex items-center gap-4 sm:gap-6 min-w-0 cursor-pointer">
        <div className="flex items-center gap-4 sm:gap-6">
          {showActions && (
            <Button
              className="text-custom-icons dark:text-white/50 cursor-pointer hover:text-custom-primary"
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
          <h5 className="h5 text-custom-primary dark:text-white truncate">
            {highlightMatches(book.name, query || '')}
          </h5>
          <p className="body-text text-custom-secondary dark:text-white/50 truncate">
            {highlightMatches(book.author, query || '')}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pl-11 lg:pl-0">
        {showActions && isCartItem(book) && <QuantityControls book={book} />}

        <h3
          className={cn(
            'font-[600] text-custom-primary dark:text-white w-20 text-right',
            {
              'text-[20px] sm:text-[22px]': showActions,
              'text-[16px]': !showActions,
            },
          )}
        >
          {`$${book.priceDiscount ? book.priceDiscount : book.priceRegular}`}
        </h3>
      </div>
    </article>
  );
};
