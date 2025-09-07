import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Book, CartItem } from '@/types/Book';

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

export const useBookStore = create<BookStore>()(
  persist(
    (set) => ({
      cart: [],
      favorites: [],
      query: '',
      currentBook: null,
      bookVariants: [],

      setCurrentBook: (book) => set({ currentBook: book }),
      setBookVariants: (books) => set({ bookVariants: books }),
      setQuery: (query) => set({ query: query.trim() }),

      addToCart: (book) => {
        set((state) => {
          const existing = state.cart.find((b) => b.id === book.id);
          const updated =
            existing ?
              state.cart.map((b) =>
                b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b,
              )
            : [...state.cart, { ...book, quantity: 1 }];
          return { cart: updated };
        });
      },

      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((b) => b.id !== id) })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((b) =>
            b.id === id && b.quantity < 10 ?
              { ...b, quantity: b.quantity + 1 }
            : b,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => {
          const found = state.cart.find((b) => b.id === id);
          return {
            cart:
              found?.quantity === 1 ?
                state.cart.filter((b) => b.id !== id)
              : state.cart.map((b) =>
                  b.id === id ? { ...b, quantity: b.quantity - 1 } : b,
                ),
          };
        }),

      addToFavorites: (book) =>
        set((state) => ({
          favorites:
            state.favorites.some((b) => b.id === book.id) ?
              state.favorites
            : [...state.favorites, book],
        })),

      removeFromFavorites: (book) =>
        set((state) => ({
          favorites: state.favorites.filter((b) => b.id !== book.id),
        })),
    }),
    {
      name: 'bookstore-storage',
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
      }),
    },
  ),
);
