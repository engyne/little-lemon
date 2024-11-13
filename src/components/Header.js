import { Link } from "react-router-dom";
import '../styles/header.css';

const NavLogo = '/assets/Logo.svg';

export default function Header({ className }) {
  const classes = ['header', className].filter(Boolean).join(' ');

  return (
    <>
      <header className={classes}>
        <nav className="content-center header__nav">
          <img
            loading="lazy"
            src={NavLogo}
            alt="Restaurant Logo"
            className="header__logo"
          />
          <ul className="header__list">
            <li className="main_nav_list_li">
              <Link to='/'>
                <span>Home</span>
              </Link>
            </li>
            <li className="main_nav_list_li">
              <Link to={'reservation'}>
                <span>Reservation</span>
              </Link>
            </li>
            <li className="main_nav_list_li">
              <Link to={'about'}>
                <span>About</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
