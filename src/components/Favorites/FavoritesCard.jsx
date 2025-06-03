import { Link } from "react-router-dom";

export function FavoritesCard({ film }) {
  return (
    <Link to={`/movie/${film.id}`} className="top-movies__card">
      <div className="top-movies__card-padding">
        <img src={film.imageUrl} alt="" />
        <div className="top-movies__card-info">
          <div className="top-movies__card-info-title">
            <p>{film.title}</p>
            <p>{film.aboutInfo[1]}</p>
          </div>
          <div className="top-movies__card-info-description">
            <p>{film.aboutInfo[0]}</p>
            <p>{film.categoryes[1]}</p>
            <p>{film.aboutInfo[3]}m</p>
            <p>{film.categoryes[0]}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
