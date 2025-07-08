import { BookCard } from '@/components/bloks/BookCard/BookCard';
import { Book } from '@/types/Book';

type BookListProps = {
  books: Book[];
};

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="flex">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};
