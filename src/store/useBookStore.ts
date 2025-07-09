import { create } from 'zustand';
import { Book } from '@/types/Book';

interface BookStore {
  cart: Book[];
  favourites: Book[];

  addToCart: (book: Book) => void;
  removeFromCart: (book: Book) => void;

  addToFavourites: (book: Book) => void;
  removeFromFavourites: (book: Book) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),

  addToCart: (book) => {
    set((state) => {
      const updated = [...state.cart, book];
      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  removeFromCart: (book) => {
    set((state) => {
      const updated = state.cart.filter((b) => b.id !== book.id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  addToFavourites: (book) => {
    set((state) => {
      const updated = [...state.favourites, book];
      localStorage.setItem('favourites', JSON.stringify(updated));
      return { favourites: updated };
    });
  },

  removeFromFavourites: (book) => {
    set((state) => {
      const updated = state.favourites.filter((b) => b.id !== book.id);
      localStorage.setItem('favourites', JSON.stringify(updated));
      return { favourites: updated };
    });
  },
}));
