import { NavLink } from 'react-router-dom';

export const Header = () => {
  const isActiveNavbar = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navbar-item has-background-grey-light' : 'navbar-item';

  return (
    <nav
      className="navbar is-fixed-top has-shadow has-background-grey-lighter"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink className={isActiveNavbar} to="/">
            Home
          </NavLink>

          <NavLink className={isActiveNavbar} to="/paper">
            Paper
          </NavLink>

          <NavLink className={isActiveNavbar} to="/kindle">
            Kindle
          </NavLink>

          <NavLink className={isActiveNavbar} to="/audiobook">
            Audiobook
          </NavLink>

          <NavLink className={isActiveNavbar} to="/favourites">
            Favourites
          </NavLink>

          <NavLink className={isActiveNavbar} to="/cart">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
