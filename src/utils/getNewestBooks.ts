import { Book } from '@/types/Book';

export function getNewestBooks(books: Book[]) {
  const newestBooks = [...books]
    .sort((b1, b2) => b2.publicationYear - b1.publicationYear)
    .slice(0, 10);

  return newestBooks;
}
