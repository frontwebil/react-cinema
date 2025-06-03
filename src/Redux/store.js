import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice"
import favoritesSlice from './slices/favoritesSlice'

export const store = configureStore({
  reducer: {
    moviesSlice,
    favoritesSlice
  },
});

