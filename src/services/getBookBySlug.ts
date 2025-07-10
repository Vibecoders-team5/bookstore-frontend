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

export const getBookAndVariants = async (
  type: 'paperback' | 'kindle' | 'audiobook',
  slug: string,
): Promise<{ current: Book; variants: Book[] }> => {
  const books = await client.get<Book[]>(type);

  const current = books.find((b) => b.slug === slug);
  if (!current) throw new Error('Book not found');

  const variants = books.filter((b) => b.namespaceId === current.namespaceId);

  return { current, variants };
};
