import { Book } from '@/types/Book';
import { client } from './fetchClient';

export const getPaperBooks = () => {
  return client.get<Book[]>('paperback');
};
