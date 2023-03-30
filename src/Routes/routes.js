import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import MyComment from "../Pages/MyComment";
import ServiceDetails from "../Pages/ServiceDetails";
import Services from "../Pages/Services";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
// import RequireAuth from "./RequireAuth";

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
        path: "/my-comment",
        element: <MyComment />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);
