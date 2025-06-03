import { Filter } from "../components/Filter/Filter";
import { Banner } from "../components/Home/Banner";
import { MoviesList } from "../components/Movies/MoviesList";
import { MoviesScroll } from "../components/Movies/MoviesScroll";

export function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Filter />
        <MoviesList />
        <MoviesScroll />
      </div>
    </>
  );
}
