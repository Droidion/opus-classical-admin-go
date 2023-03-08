import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "./components/pages/Auth";
import Countries from "./components/pages/Countries";
import ErrorPage from "./components/pages/ErrorPage";
import UnauthorisedLayout from "./components/layouts/UnauthorisedLayout";
import AuthorisedLayout from "./components/layouts/AuthorisedLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UnauthorisedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
  {
    path: "/content",
    element: <AuthorisedLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "countries",
        element: <Countries />,
      },
    ],
  },
]);
