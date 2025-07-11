import { create } from 'zustand';
import { Book } from '@/types/Book';
export type CartItem = Book & { quantity: number };

interface BookStore {
  cart: CartItem[];
  favourites: Book[];
  query: string;
  currentBook: Book | null;
  bookVariants: Book[];

  setQuery: (query: string) => void;

  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  addToFavourites: (book: Book) => void;
  removeFromFavourites: (book: Book) => void;

  setCurrentBook: (book: Book) => void;
  setBookVariants: (books: Book[]) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  cart: JSON.parse(localStorage.getItem('cart') || '[]'),
  favourites: JSON.parse(localStorage.getItem('favourites') || '[]'),
  currentBook: null,
  bookVariants: [],
  query: '',

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
