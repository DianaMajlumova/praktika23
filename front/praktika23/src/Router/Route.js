import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Add from "../Pages/Add/Add";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/add",
    element:<Add/>,
  },
]);
export default router