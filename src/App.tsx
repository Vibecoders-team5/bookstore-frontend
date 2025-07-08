import { Outlet } from 'react-router-dom';
import { Header } from './components/sections/Header/Header';
import { Footer } from './components/sections/Footer/Footer';
export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="section flex-grow">
        <div className="container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
