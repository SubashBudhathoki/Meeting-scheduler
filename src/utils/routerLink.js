import React from "react";
import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import Minutepage from "../pages/Minutepage";
import Main from "../component/Main";
import Details from "../pages/Details";
import Completepage from "../pages/Completepage";
import Cancel from "../pages/Cancel";

const routerLink = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/:id",
        element: <Minutepage />,
      },
      {
        path: "/details/:paramidfrom",
        element: <Details />,
      },
      {
        path: "/completepage/:id",
        element: <Completepage />,
      },
      {
        path: "/cancel",
        element: <Cancel />,
      },
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default routerLink;
