import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./Pages/Home";
import { Favorites } from "./Pages/Favorites";
import { Movie } from "./Pages/Movie";
import { NotFound } from "./Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/movie/:filmId",
        element: <Movie />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
