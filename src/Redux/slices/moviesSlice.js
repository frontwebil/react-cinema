import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  films: [],
  status: null,
  errors: null,
  currentFilm: {
    film: null,
    status: "loading",
    error: null,
  },
  searchFilms: [],
  filmsCategory: [],
  filteredFilmsCategory: [],
  activeCategory: "All",
};

export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  return axios
    .get("https://68160c1632debfe95dbd410f.mockapi.io/api/films/movies")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      console.error(error.status);
      throw error;
    });
});

const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    changeCurrentFilm: (state, action) => {
      const filmId = action.payload;
      const currentFilm = state.films.find((film) => film.id === filmId);
      state.currentFilm.film = currentFilm;
      state.currentFilm.status = "fullfilled";
    },
    searchFilm: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      let baseList = [];

      if (state.activeCategory !== "All") {
        baseList = state.filteredFilmsCategory;
      } else {
        baseList = state.films;
      }

      if (action.payload === "") {
        state.searchFilms = [];
      } else {
        state.searchFilms = baseList.filter((film) =>
          film.title.toLowerCase().includes(searchTerm)
        );
      }
    },
    filterFilmsByCategory: (state, action) => {
      state.activeCategory = action.payload;
      if (action.payload === "All") {
        state.filteredFilmsCategory = [];
      } else {
        const searchFilms = state.films.filter((film) =>
          film.category.includes(action.payload)
        );
        state.filteredFilmsCategory = searchFilms;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.films = action.payload;
        state.filmsCategory = [
          ...new Set(action.payload.flatMap((film) => film.category)),
        ];
        state.status = "fullfilled";
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "loading";
        console.error(action.error.message);
        state.errors = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
export const { changeCurrentFilm, searchFilm, filterFilmsByCategory } =
  moviesSlice.actions;
