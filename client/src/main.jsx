import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./i18n/i18n";

if (!localStorage.getItem("favorites")) {
  localStorage.setItem("favorites", "[]");
}

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={routes} />
  </>
);
