import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Latest from "../components/outlet/featuredAndLatest/latest";
import Featured from "../components/outlet/featuredAndLatest/featured";
import { latest } from "../data/latest";
import { featured } from "../data/featured";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        path: "featured",
        element: <Featured />,
        loader: () => featured,
      },
      {
        path: "latest",
        element: <Latest />,
        loader: () => latest,
      },
    ],
  },
]);
