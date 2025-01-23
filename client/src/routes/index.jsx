import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import Latest from "../components/outlet/featuredAndLatest/latest";
import Featured from "../components/outlet/featuredAndLatest/featured";
import ProductPage from "../pages/product";
import Reviews from "../components/outlet/reviewsAndDetails/reviews";
import Details from "../components/outlet/reviewsAndDetails/details";
import MainLayOut from "../layout/mainLayOut";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <Featured />,
          },
          {
            path: "latest",
            element: <Latest />,
          },
        ],
      },
      {
        path: "products/:documentId",
        element: <ProductPage />,
        children: [
          {
            index: true,
            element: <Reviews />,
          },
          {
            path: "details",
            element: <Details />,
          },
        ],
      },
      {
        path: "listing",
        // element: <LisringPage />,
      },
    ],
  },
]);
