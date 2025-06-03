import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { FavoritesMoviesList } from "./FavoritesMoviesList";
import { LoadingMovies } from "./LoadingMovies";
import { MoviesCards } from "./MoviesCards";

export function MoviesList() {
  const { pathname } = useLocation();
  const { films, status, searchFilms, filteredFilmsCategory } = useSelector(
    (store) => store.moviesSlice
  );
  const { favoritesFilms } = useSelector((store) => store.favoritesSlice);

  return (
    <div id="movies" className="movies anchor">
      {pathname === "/favorites" ? (
        <FavoritesMoviesList
          favoritesFilms={favoritesFilms}
          searchFilms={searchFilms}
          filteredFilmsCategory={filteredFilmsCategory}
        />
      ) : status === "loading" || status === null ? (
        <LoadingMovies />
      ) : (
        <MoviesCards
          films={films}
          searchFilms={searchFilms}
          filteredFilmsCategory={filteredFilmsCategory}
        />
      )}
    </div>
  );
}
