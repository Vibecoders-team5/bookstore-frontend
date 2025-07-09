import { Book } from '@/types/Book';
import { client } from './fetchClient';

export const getBookBySlug = async (
  type: 'paperback' | 'kindle' | 'audiobook',
  slug: string,
): Promise<Book | null> => {
  const books = await client.get<Book[]>(type);
  console.log('Current:', slug);
  return books.find((book) => book.slug === slug) || null;
};
