import { MoviesCard } from "./MoviesCard";

export function MoviesCards({ films, searchFilms, filteredFilmsCategory }) {
  let moviesToShow = [];
  if (searchFilms.length > 0) {
    moviesToShow = searchFilms;
  } else if (filteredFilmsCategory.length > 0) {
    moviesToShow = filteredFilmsCategory;
  } else {
    moviesToShow = films;
  }

  return (
    <>
      {moviesToShow.map((film, index) => (
        <MoviesCard key={index} film={film} />
      ))}
    </>
  );
}
