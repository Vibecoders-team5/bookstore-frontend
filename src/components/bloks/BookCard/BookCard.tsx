import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { HeadphonesRound } from '@/components/ui/Icons/HeadphonesRound';
import { Book } from '@/types/Book';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type BookCardProps = {
  book: Book;
};

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  console.log(book.images);
  return (
    <div className="w-[272px] h-[506px] relative flex flex-col p-8 gap-4 rounded-lg border-1 border-gray-200 hover:shadow-sm bg-white">
      <HeadphonesRound />
      <Link to={`/${book.type}/${book.slug}`}>
        <div className="w-full h-[263px]">
          <img
            className="w-full h-full object-contain"
            src={`/books/${book.images[0]}`}
            alt={book.name}
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <Link to={`/${book.type}/${book.slug}`}>
          <div>
            <Tooltip>
              <TooltipTrigger asChild>
                <h5 className="h5 truncate max-w-[200px]">{book.name}</h5>
              </TooltipTrigger>
              <TooltipContent className="bg-black text-white">
                <p>{book.name}</p>
              </TooltipContent>
            </Tooltip>
            <p className="body-text">{book.author}</p>
          </div>
        </Link>
        <div className="flex flex-col">
          {book.priceDiscount ?
            <div className="flex items-center gap-2">
              <h3 className="h3">{`₴${book.priceDiscount}`}</h3>
              <h4 className="h4 line-through text-gray-400">{`₴${book.priceRegular}`}</h4>
            </div>
          : <h3 className="h3">{`₴${book.priceRegular}`}</h3>}
          <div className="inline-flex gap-1.5">
            <Truck className="text-green-600 w-[22px] h-[22px]" />
            <p className="btn-text text-green-600">In stock</p>
          </div>
        </div>
      </div>
      <div className="inline-flex gap-2">
        <AddButton />
        <HeartButton />
      </div>
    </div>
  );
};
