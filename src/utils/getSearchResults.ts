import { Book } from '@/types/Book';

export function getSearchResults(books: Book[], query: string) {
  return books.filter((book) => book.name.toLowerCase().trim().includes(query));
}
