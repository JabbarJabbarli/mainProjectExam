import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Latest from "../components/outlet/featuredAndLatest/latest";
import Featured from "../components/outlet/featuredAndLatest/featured";
import { latest } from "../data/latest";
import { featured } from "../data/featured";
import ProductPage from "../pages/product";
import Reviews from "../components/outlet/reviewsAndDetails/reviews";
import Details from "../components/outlet/reviewsAndDetails/details";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        path: "",
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
  {
    path: "/product",
    element: <ProductPage />,
    children: [
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
]);
