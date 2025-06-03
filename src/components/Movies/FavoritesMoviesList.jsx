import { MoviesCard } from "./MoviesCard";

export function FavoritesMoviesList({
  favoritesFilms,
  searchFilms,
  filteredFilmsCategory,
}) {
  let moviesToShow = [];
  if (searchFilms.length > 0) {
    moviesToShow = searchFilms.filter((film) => {
      return favoritesFilms.some((value) => value.title === film.title);
    });
  } else if (filteredFilmsCategory.length > 0) {
    moviesToShow = filteredFilmsCategory.filter((film) => {
      return favoritesFilms.some((value) => value.title === film.title);
    });
  } else {
    moviesToShow = favoritesFilms;
  }

  if(moviesToShow.length === 0){
    return <p style={{color:"white"}}>У вас нет избранных фильмов</p>
  }

  return (
    <>
      {moviesToShow.map((film, index) => (
        <MoviesCard key={index} film={film} />
      ))}
    </>
  );
}
