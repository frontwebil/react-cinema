import { useDispatch } from "react-redux";
import { Rating } from "../Rating";
import {
  addFavoriteFilm,
  removeFavoriteFilm,
} from "../../../Redux/slices/favoritesSlice";

export function MainInfoLeft({ filmInfo }) {
  const dispatch = useDispatch();

  return (
    <div className="main__info-left">
      <div className="">
        <button
          className="main__info-left-favorite"
          onClick={() => dispatch(addFavoriteFilm(filmInfo))}
        >
          Favorite
        </button>
        <button
          className="main__info-left-favorite"
          onClick={() => dispatch(removeFavoriteFilm(filmInfo))}
        >
          Remove Favorite
        </button>
      </div>
      <div className="main__info-left-title">
        <p>{filmInfo.title}</p>
        <Rating />
      </div>
      <div className="main__info-left-categoryes">
        {filmInfo.categoryes.map((value, index) => (
          <p key={index}>{value}</p>
        ))}
      </div>
      <div className="main__info-left-about">
        <p>Описание</p>
        <p>{filmInfo.description}</p>
      </div>
    </div>
  );
}
