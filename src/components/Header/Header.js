import { NavLink } from "react-router-dom";
import './header.css';
import { useEffect, useRef, useState } from "react";

const NavLogo = '/assets/Logo.svg';

export function Header({ className }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const classes = ['header', className, menuOpen ? 'menu-open' : ''].filter(Boolean).join(' ');

  function handleDocumentClick() {
    document.addEventListener('click', e => {
      if (!e?.target.closest('.header')) {
        setMenuOpen(false);
      }
    })
  }

  useEffect(() => {
    handleDocumentClick();
    return () => document.removeEventListener('click', handleDocumentClick);
  }, [])

  return (
    <header ref={headerRef} className={classes}>
      <nav className="content-center header__nav">
        <NavLink
          to="/"
        >
          <img
            loading="lazy"
            src={NavLogo}
            alt="Restaurant Logo"
            className="header__logo"
          />
        </NavLink>
        <ul className="header__list">
          <li className="main_nav_list_li">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <span>Home</span>
            </NavLink>
          </li>
          <li className="main_nav_list_li">
            <NavLink
              to="/reservation"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <span>Reservation</span>
            </NavLink>
          </li>
          <li className="main_nav_list_li">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              <span>About</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}></button>
    </header>
  );
}
