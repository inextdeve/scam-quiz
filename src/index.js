import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home"
import "./index.css"
import RandomGift from "./pages/RandomGift";
import GiftProvider, { GiftContext } from "./context/context";
import Congratulation from "./pages/Congratulation";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <Nav><Home/></Nav>
    ),
  },
  {
    path: "randomgift",
    element: <Nav><RandomGift/></Nav>
  },
  {
    path: "congratulation",
    element: <Nav><Congratulation/></Nav>
  }
  
]);


createRoot(document.getElementById("root")).render(
  <GiftProvider><RouterProvider router={router} /></GiftProvider>
);