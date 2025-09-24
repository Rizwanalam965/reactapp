import { Suspense } from "react";
import MyNavbar from "../15_browserRouter/MyNavbar";
import { Outlet } from "react-router-dom";
import Loader from "./Loader";

const Layout = () => {
  return (
    <div>
      <MyNavbar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
