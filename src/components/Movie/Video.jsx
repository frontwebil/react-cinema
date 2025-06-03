import { useSelector } from "react-redux";
import {sliceUrl} from "../../tools/sliceUrl";
import { useEffect, useState } from "react";
import SkeletonMovie from "../Skeletons/SkeletonMovie";

export function Video() {
  const { film, status } = useSelector(
    (store) => store.moviesSlice.currentFilm
  );
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    if (status === "fullfilled") {
      setTrailerUrl(sliceUrl(film.trailerUrl));
    }
  }, [film, status]);
  return (
    <div className="video-wrapper">
      {status === "loading" ? (
        <>
          <SkeletonMovie></SkeletonMovie>
        </>
      ) : (
        <>
          <iframe
            width="100%"
            height="600"
            frameBorder={0}
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </>
      )}
    </div>
  );
}
