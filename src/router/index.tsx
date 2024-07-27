import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";
import Cars from "../pages/cars";
import Brands from "../pages/brands";
import Services from "../pages/services";
import About from "../pages/about";
import Contacts from "../pages/contacts";
import Blog from "../pages/blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/brand",
        element: <Brands />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/about_us",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
export default router;
