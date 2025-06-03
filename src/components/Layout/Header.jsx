import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to={'/'} className="header__logo-flex">
        <img src="/assets/icons/pngwing.com.png" alt="logo" />
        <div className="header__logo-flex_sitename">
          <p>REACT</p>
          <p>CINEMA</p>
        </div>
      </Link>
      <ul className="header__navbar-flex">
        <Link to={'/'}>Home</Link>
        <Link to={'/favorites'}>Favorites</Link>
        <a href="#categoryes">Movies</a>
        <a href="#categoryes">FAQ</a>
        <a href="#categoryes">Help</a>
      </ul>
      <div className="header__auth-flex">
        <div className="favorites__movies">
          <img src="/assets/icons/icons8-червы-100.png" alt="" />
          <p>0</p>
        </div>
        <a href="#">Account</a>
      </div>
    </header>
  );
}
