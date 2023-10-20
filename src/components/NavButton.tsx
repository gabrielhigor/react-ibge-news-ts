import { NavLink } from 'react-router-dom';

function NavButton() {
  return (
    <nav>
      <NavLink to="/">
        Mais notícias
      </NavLink>
      <NavLink to="/favorites">
        Favoritas
      </NavLink>
    </nav>
  );
}

export default NavButton;
