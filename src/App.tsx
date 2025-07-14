import { Outlet } from 'react-router-dom';
import { Header } from './components/sections/Header/Header';
import { Footer } from './components/sections/Footer/Footer';
import { useThemeStore } from './store/useThemeStore';
import { useEffect } from 'react';

export const App = () => {
  const { setTheme, theme } = useThemeStore();
  useEffect(() => {
    setTheme(theme);
  }, [setTheme, theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="section flex-grow">
        {/* pt-12 xl:pt-16 deleted these classes */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
