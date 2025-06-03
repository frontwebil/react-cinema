import SkeletonFilm from "../Skeletons/SkeletonFilm";

export function LoadingMovies() {
  return [...Array(12)].map((_, index) => <SkeletonFilm key={index} />);
}
