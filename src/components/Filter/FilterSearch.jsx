import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchFilm } from "../../Redux/slices/moviesSlice";

export function FilterSearch() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(searchFilm(searchData));
    }, 500);
    return () => clearTimeout(handler);
  }, [searchData, dispatch]);

  return (
    <div className="filter__search">
      <input
        type="text"
        placeholder="Search..."
        value={searchData}
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      />
      <button>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
