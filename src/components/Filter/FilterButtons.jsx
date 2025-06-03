import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterFilmsByCategory } from "../../Redux/slices/moviesSlice";

export function FilterButtons() {
  const dispatch = useDispatch();
  const [activeCategoryes, setCategoryes] = useState("All");
  const { filmsCategory, filteredFilmsCategory } = useSelector(
    (store) => store.moviesSlice
  );

  useEffect(() => {
    dispatch(filterFilmsByCategory(activeCategoryes));
  }, [activeCategoryes, dispatch]);

  console.log(filteredFilmsCategory);

  return (
    <div className="filter__buttons">
      <button
        onClick={() => {
          setCategoryes("All");
        }}
        className={`${activeCategoryes === "All" ? "active" : ""}`}
      >
        All
      </button>
      {filmsCategory.map((name, index) => (
        <button
          className={`${name === activeCategoryes ? "active" : ""}`}
          onClick={() => setCategoryes(name)}
          key={index}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
