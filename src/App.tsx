import { Outlet } from 'react-router-dom';
import { Header } from './components/sections/Header/Header';
export const App = () => {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
