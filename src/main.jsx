import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./Component/App.jsx";
// import MoreProjects from "./Component/MoreProjects.jsx";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";

import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  // {
  //   path: "/MoreProjects",
  //   element: <MoreProjects />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
