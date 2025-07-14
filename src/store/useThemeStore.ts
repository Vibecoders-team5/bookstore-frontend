import { create } from 'zustand';

type Theme = 'light' | 'dark';

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  theme:
    (localStorage.getItem('theme') as Theme) ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ?
      'dark'
    : 'light'),

  setTheme: (theme) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
    set({ theme });
  },

  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(newTheme);
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    });
  },
}));
