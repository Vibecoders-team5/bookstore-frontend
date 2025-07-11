import { Book } from '@/types/Book';

export function getRandomBooks(books: Book[]): Book[] {
  const shuffled = [...books].sort(() => Math.random() - 0.5);
  return shuffled;
}
