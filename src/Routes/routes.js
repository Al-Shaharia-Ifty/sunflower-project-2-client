import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);
