import { Button } from '@/components/ui/button';
import { useBookStore } from '@/store/useBookStore';
import { CartItem } from '@/types/Book';
import { Minus, Plus } from 'lucide-react';

type QuantityControlsProps = {
  book: CartItem;
};

export const QuantityControls: React.FC<QuantityControlsProps> = ({ book }) => {
  const { increaseQuantity, decreaseQuantity } = useBookStore();

  return (
    <div
      className="flex justify-between items-center"
      onClick={(event) => event.stopPropagation()}
    >
      <Button
        className="w-8 h-8 cursor-pointer text-custom-icons dark:text-white/50 dark:hover:text-white hover:text-custom-primary"
        size="icon"
        variant="ghost"
        onClick={() => decreaseQuantity(book.id)}
      >
        <Minus size={16} />
      </Button>

      <span className="body-text text-custom-primary dark:text-white px-3">
        {book.quantity}
      </span>

      <Button
        className="w-8 h-8 cursor-pointer text-custom-icons hover:text-custom-primary dark:text-white/50 dark:hover:text-white"
        size="icon"
        variant="ghost"
        onClick={() => increaseQuantity(book.id)}
      >
        <Plus size={16} />
      </Button>
    </div>
  );
};
