import { createSlice } from "@reduxjs/toolkit";

function loadFavoritesFilms() {
  const dataLocal = localStorage.getItem("favoritesFilms");
  const parseData = dataLocal ? JSON.parse(dataLocal) : [];
  return parseData;
}

const initialState = {
  favoritesFilms: loadFavoritesFilms(),
  status: "loading",
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteFilm: (state, action) => {
      const dataFilm = action.payload;
      const isAlreadyFavorite = state.favoritesFilms.some(
        (film) => film.id === dataFilm.id
      );
      if (!isAlreadyFavorite) {
        state.favoritesFilms.push(dataFilm);
        const stringifyDataFilm = JSON.stringify(state.favoritesFilms);
        localStorage.setItem("favoritesFilms", stringifyDataFilm);
      }
    },
    removeFavoriteFilm: (state, action) => {
      const dataFilm = action.payload;

      state.favoritesFilms = state.favoritesFilms.filter(
        (film) => film.id !== dataFilm.id
      );

      const stringifyDataFilm = JSON.stringify(state.favoritesFilms);
      localStorage.setItem("favoritesFilms", stringifyDataFilm);
    },
  },
});

export default favoritesSlice.reducer;
export const { addFavoriteFilm, removeFavoriteFilm } = favoritesSlice.actions;
