import { create } from 'zustand';
import { Book } from '@/types/Book';
import {
  getPaperBooks,
  getKindleBooks,
  getAudioBooks,
} from '@/services/booksAPI';

type State = {
  allBooks: Book[];
  paperBooks: Book[];
  kindleBooks: Book[];
  audioBooks: Book[];
  isLoading: boolean;
  fetchAllBooks: () => Promise<void>;
  fetchPaperBooks: () => Promise<void>;
  fetchKindleBooks: () => Promise<void>;
  fetchAudioBooks: () => Promise<void>;
};

export const useFetchBooksStore = create<State>((set) => ({
  allBooks: [],
  paperBooks: [],
  kindleBooks: [],
  audioBooks: [],
  isLoading: false,

  fetchAllBooks: async () => {
    set({ isLoading: true });
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
    } finally {
      set({ isLoading: false });
    }
  },

  fetchPaperBooks: async () => {
    set({ isLoading: true });
    try {
      const books = await getPaperBooks();
      set({ paperBooks: books });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchKindleBooks: async () => {
    set({ isLoading: true });
    try {
      const books = await getKindleBooks();
      set({ kindleBooks: books });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAudioBooks: async () => {
    set({ isLoading: true });
    try {
      const books = await getAudioBooks();
      set({ audioBooks: books });
    } finally {
      set({ isLoading: false });
    }
  },
}));
