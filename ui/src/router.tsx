import { createBrowserRouter, Navigate } from "react-router-dom";
import Auth from "./components/pages/Auth";
import Catalogues from "./components/pages/Catalogues";
import Composers from "./components/pages/Composers";
import Countries from "./components/pages/Countries";
import ErrorPage from "./components/pages/ErrorPage";
import UnauthorisedLayout from "./components/layouts/UnauthorisedLayout";
import AuthorisedLayout from "./components/layouts/AuthorisedLayout";
import Instruments from "./components/pages/Instruments";
import Labels from "./components/pages/Labels";
import Performers from "./components/pages/Performers";
import Periods from "./components/pages/Periods";

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
      {
        path: "periods",
        element: <Periods />,
      },
      {
        path: "Catalogues",
        element: <Catalogues />,
      },
      {
        path: "Instruments",
        element: <Instruments />,
      },
      {
        path: "labels",
        element: <Labels />,
      },
      {
        path: "performers",
        element: <Performers />,
      },
      {
        path: "composers",
        element: <Composers />,
      },
    ],
  },
]);
