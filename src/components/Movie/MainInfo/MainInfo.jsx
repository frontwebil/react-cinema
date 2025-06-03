import { MainInfoLeft } from "./MainInfoLeft";
import { MainInfoRight } from "./MainInfoRight";
import { useSelector } from "react-redux";

export function MainInfo() {
  const { film, status } = useSelector(
    (store) => store.moviesSlice.currentFilm
  );

  return (
    <div className="main__info">
      {status === "loading" ? (
        <p>Loading ...</p>
      ) : (
        <>
          <MainInfoLeft filmInfo={{ ...film }} />
          <MainInfoRight filmInfo={{ ...film }} />
        </>
      )}
    </div>
  );
}
