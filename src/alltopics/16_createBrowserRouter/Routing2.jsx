import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const About = lazy(() => import("../../pages/About"));
const Contacts = lazy(() => import("../../pages/Contacts"));
const Signup = lazy(() => import("../../pages/Signup"));
const Layout = lazy(() => import("../16_createBrowserRouter/Layout"));


// import Home from "../../pages/Home";
// import About from "../../pages/About";
// import Contacts from "../../pages/Contacts";
// import Signup from "../../pages/Signup";
// import Layout from "./Layout";

let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

const Routing2 = () => {
  return (
    <div>
      <RouterProvider router={myRoutes}></RouterProvider>
    </div>
  );
};

export default Routing2;
