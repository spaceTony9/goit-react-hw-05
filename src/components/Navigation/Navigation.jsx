import { NavLink, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

function Navigation() {


  return <nav className={css.navigation}>
    <NavLink to="/" className={buildLinkClass}>Home</NavLink>
    <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
  </nav>;
}

export default Navigation;