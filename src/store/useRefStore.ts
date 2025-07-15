import { create } from 'zustand';

interface RefStore {
  cartIconRef: React.RefObject<HTMLDivElement> | null;
  favIconRef: React.RefObject<HTMLDivElement> | null;
  burgIconRef: React.RefObject<HTMLDivElement> | null;

  setCartIconRef: (ref: React.RefObject<HTMLDivElement>) => void;
  setFavIconRef: (ref: React.RefObject<HTMLDivElement>) => void;
  setBurgIconRef: (ref: React.RefObject<HTMLDivElement>) => void;
}

export const useRefStore = create<RefStore>((set) => ({
  cartIconRef: null,
  favIconRef: null,
  burgIconRef: null,

  setCartIconRef: (ref) => set({ cartIconRef: ref }),
  setFavIconRef: (ref) => set({ favIconRef: ref }),
  setBurgIconRef: (ref) => set({ burgIconRef: ref }),
}));
