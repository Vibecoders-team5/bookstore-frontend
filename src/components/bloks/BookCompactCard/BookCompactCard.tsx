import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
// import { CartItem } from '@/Pages';
import { Book } from '@/types/Book';
import { Minus, Plus, X } from 'lucide-react';

type BookCompactCardProps = {
  book: Book;
  showActions: boolean;
  onRemove?: (id: string) => void;
  onIncrement?: (id: string) => void;
  onDecrement?: (id: string) => void;
};

export const BookCompactCard = ({
  book,
  showActions,
  onRemove = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
}: BookCompactCardProps) => {
  return (
    <article
      className={cn(
        'flex justify-between p-4 sm:px-6 gap-4 border border-[#E2E6E9] rounded-[16px] bg-white',
        showActions ? 'flex-col sm:flex-row' : 'flex-row',
      )}
    >
      <div className="flex items-center gap-4 sm:gap-6 min-w-0">
        <div className="flex items-center gap-4 sm:gap-6">
          {showActions && (
            <Button
              className="text-[#B4BDC3] hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={() => onRemove(book.id)}
            >
              <X size={16} />
            </Button>
          )}

          <div className="flex w-20 h-20">
            <img
              className="w-full h-full object-contain"
              src={`/books/${book.images[0]}`}
              alt={book.name}
            />
          </div>
        </div>

        <div className="flex-grow min-w-0">
          <h5 className=" h5 text-[#313237] truncate">{book.name}</h5>
          <p className="body-text text-[#89939A] truncate">{book.author}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 xl:gap-6">
        {showActions && (
          <div className="flex justify-between items-center">
            <Button
              className="w-8 h-8 text-[#B4BDC3] hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={() => onDecrement(book.id)}
            >
              <Minus size={16} />
            </Button>

            {/* <span className="body-text text-[#313237] px-3">
              {book.quantity}
            </span> */}

            <Button
              className="w-8 h-8 text-[#B4BDC3] hover:text-[#313237]"
              size="icon"
              variant="ghost"
              onClick={() => onIncrement(book.id)}
            >
              <Plus size={16} />
            </Button>
          </div>
        )}

        <h3 className="text-[20px] sm:text-[22px] font-[600] text-[#313237]">
          {`$${book.priceDiscount ? book.priceDiscount : book.priceRegular}`}
        </h3>
      </div>
    </article>
  );
};
