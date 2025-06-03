import { Link } from "react-router-dom";

export function MoviesCard({film}) {
  return (
    <Link to={`/movie/${film.id}`} className="movies__card">
      <div className="movies__card-rating">
        <img src="/assets/icons/star.png" alt="" />
        <img src="/assets/icons/star.png" alt="" />
        <img src="/assets/icons/star.png" alt="" />
        <img src="/assets/icons/star.png" alt="" />
        <img src="/assets/icons/star.png" alt="" />
      </div>
      <img src={film.imageUrl} alt="" />
    </Link>
  );
}
