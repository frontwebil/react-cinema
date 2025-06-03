import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <h2 className="notfound-subtitle">Страница не найдена</h2>
      <p className="notfound-text">
        Возможно, вы ввели неправильный адрес или страница была перемещена.
      </p>
      <Link to="/" className="notfound-button">
        На главную
      </Link>
    </div>
  );
}