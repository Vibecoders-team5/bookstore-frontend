import { create } from 'zustand';
import { Book } from '@/types/Book';
export type CartItem = Book & { quantity: number };

interface BookStore {
  cart: CartItem[];
  favorites: Book[];
  query: string;
  currentBook: Book | null;
  bookVariants: Book[];

  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  addToFavorites: (book: Book) => void;
  removeFromFavorites: (book: Book) => void;

  setQuery: (query: string) => void;

  setCurrentBook: (book: Book) => void;
  setBookVariants: (books: Book[]) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  query: '',
  currentBook: null,
  bookVariants: [],

  setCurrentBook: (book) => set({ currentBook: book }),
  setBookVariants: (books) => set({ bookVariants: books }),

  setQuery: (query) => {
    const normalizedQuery = query.trim();
    set(() => ({ query: normalizedQuery }));
  },

  addToCart: (book) => {
    set((state) => {
      const existing = state.cart.find((b) => b.id === book.id);
      const updated =
        existing ?
          state.cart.map((b) =>
            b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b,
          )
        : [...state.cart, { ...book, quantity: 1 }];
      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  removeFromCart: (id) => {
    set((state) => {
      const updated = state.cart.filter((b) => b.id !== id);
      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  increaseQuantity: (id) => {
    set((state) => {
      const updated = state.cart.map((b) =>
        b.id === id && b.quantity < 10 ? { ...b, quantity: b.quantity + 1 } : b,
      );
      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  decreaseQuantity: (id) => {
    set((state) => {
      const found = state.cart.find((b) => b.id === id);
      let updated: CartItem[];

      if (found?.quantity === 1) {
        updated = state.cart.filter((b) => b.id !== id);
      } else {
        updated = state.cart.map((b) =>
          b.id === id ? { ...b, quantity: b.quantity - 1 } : b,
        );
      }

      localStorage.setItem('cart', JSON.stringify(updated));
      return { cart: updated };
    });
  },

  addToFavorites: (book) => {
    set((state) => {
      const updated = [...state.favorites, book];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },

  removeFromFavorites: (book) => {
    set((state) => {
      const updated = state.favorites.filter((b) => b.id !== book.id);
      localStorage.setItem('favorites', JSON.stringify(updated));
      return { favorites: updated };
    });
  },
}));
