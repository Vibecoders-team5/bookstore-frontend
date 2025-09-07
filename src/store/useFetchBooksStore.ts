import { create } from 'zustand';
import { Book } from '@/types/Book';
import {
  getPaperBooks,
  getKindleBooks,
  getAudioBooks,
} from '@/services/booksAPI';

type BooksStoreState = {
  allBooks: Book[];
  paperBooks: Book[];
  kindleBooks: Book[];
  audioBooks: Book[];
  isLoading: boolean;
  error: string | null;
  fetchAllBooks: () => Promise<void>;
  fetchBooksByType: (type: 'paper' | 'kindle' | 'audio') => Promise<void>;
  clearBooks: () => void;
};

const initialState = {
  allBooks: [],
  paperBooks: [],
  kindleBooks: [],
  audioBooks: [],
  isLoading: false,
  error: null,
};

export const useFetchBooksStore = create<BooksStoreState>((set) => ({
  ...initialState,

  fetchAllBooks: async () => {
    set({ isLoading: true, error: null });
    try {
      const [paper, kindle, audio] = await Promise.all([
        getPaperBooks(),
        getKindleBooks(),
        getAudioBooks(),
      ]);
      set({
        paperBooks: paper,
        kindleBooks: kindle,
        audioBooks: audio,
        allBooks: [...paper, ...kindle, ...audio],
      });
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchBooksByType: async (type) => {
    set({ isLoading: true, error: null });
    try {
      let books: Book[] = [];
      if (type === 'paper') books = await getPaperBooks();
      if (type === 'kindle') books = await getKindleBooks();
      if (type === 'audio') books = await getAudioBooks();

      set((state) => ({
        ...state,
        [`${type}Books`]: books,
      }));
    } catch (err) {
      set({ error: (err as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  clearBooks: () => set(initialState),
}));
