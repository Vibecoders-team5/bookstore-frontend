import { Book } from '@/types/Book';

type StorageKey = 'cart' | 'favourites';

export const toggleItemInStorage = (key: StorageKey, book: Book) => {
  const existing = JSON.parse(localStorage.getItem(key) || '[]');
  const isInList = existing.some((item: Book) => item.id === book.id);

  const updated =
    isInList ?
      existing.filter((item: Book) => item.id !== book.id)
    : [...existing, book];

  localStorage.setItem(key, JSON.stringify(updated));
};
