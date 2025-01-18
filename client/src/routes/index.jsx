import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Latest from "../components/outlet/featuredAndLatest/latest";
import Featured from "../components/outlet/featuredAndLatest/featured";
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
      },
      {
        path: "latest",
        element: <Latest />,
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
