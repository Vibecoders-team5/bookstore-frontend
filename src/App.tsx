import { Outlet } from 'react-router-dom';
import { Header } from './components/sections/Header/Header';
import { Footer } from './components/sections/Footer/Footer';
export const App = () => {
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
