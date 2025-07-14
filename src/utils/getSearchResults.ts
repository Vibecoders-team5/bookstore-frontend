import Fuse from 'fuse.js';
import { Book } from '@/types/Book';

export function getSearchResults(books: Book[], query: string): Book[] {
  const fuse = new Fuse(books, {
    keys: ['name', 'author'],
    threshold: 0.4,
    ignoreLocation: true,
  });

  if (!query.trim()) return books;

  const results = fuse.search(query);
  return results.map((result) => result.item);
}
