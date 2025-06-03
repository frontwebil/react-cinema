import { Video } from "../components/Movie/Video";
import { MainInfo } from "../components/Movie/MainInfo/MainInfo";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeCurrentFilm } from "../Redux/slices/moviesSlice";

export function Movie() {
  const { filmId } = useParams();
  const dispatch = useDispatch();
  const { status } = useSelector((store) => store.moviesSlice);
  useEffect(() => {
    if (status === "fullfilled") {
      dispatch(changeCurrentFilm(filmId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, status]);

  return (
    <main>
      <Video />
      <MainInfo />
    </main>
  );
}
