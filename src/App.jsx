import { Outlet } from "react-router-dom";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "./Redux/slices/moviesSlice";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
