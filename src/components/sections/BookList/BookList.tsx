import { BookCard } from '@/components/bloks/BookCard/BookCard';
import { Book } from '@/types/Book';

type BookListProps = {
  books: Book[];
};

export const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div
      className="
        grid
        gap-4
        justify-center
        grid-cols-[repeat(12,32px)]
        sm:grid-cols-[repeat(24,32px)]
      "
    >
      {books.map((book) => (
        <div key={book.id} className="col-span-6">
          <BookCard book={book} />
        </div>
      ))}
    </div>
  );
};
