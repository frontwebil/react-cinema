import { FavoritesCard } from "./FavoritesCard";
import { useSelector } from "react-redux";

export function FavoritesList() {
  const { films } = useSelector((store) => {
    return store.moviesSlice;
  });

  const topRatedFilms = films.slice(0, 4);

  return (
    <div className="top-movies">
      <p>Top Rated Films</p>
      {topRatedFilms.map((film, index) => (
        <FavoritesCard key={index} film={{ ...film }} />
      ))}
    </div>
  );
}
