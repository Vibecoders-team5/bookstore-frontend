import { BookCard } from '@/components/bloks/BookCard/BookCard';
import { Book } from '@/types/Book';

type BookListProps = {
  books: Book[];
};

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-10 min-[1136px]:justify-start">
      {books.map((book) => (
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};
