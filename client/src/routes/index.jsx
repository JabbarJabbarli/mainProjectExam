import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Latest from "../components/outlet/featuredAndLatest/latest";
import Featured from "../components/outlet/featuredAndLatest/featured";
import { latest } from "../data/latest";
import { featured } from "../data/featured";
import ProductPage from "../pages/product";
import Reviews from "../components/outlet/reviewsAndDetails/reviews";
import Details from "../components/outlet/reviewsAndDetails/details";
import { reviewsDetails } from "../data/reviewsDetail";
import { details } from "../data/details";
// import LisringPage from "../pages/listingPage";

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
    path: "/products/:documentId",
    element: <ProductPage />,
    children: [
      {
        path: "reviews",
        element: <Reviews />,
        loader: () => reviewsDetails,
      },
      {
        index: true,
        path: "",
        element: <Details />,
        loader: () => details,
      },
    ],
  },
  {
    path: "/listing",
    // element: <LisringPage />,
  },
]);
