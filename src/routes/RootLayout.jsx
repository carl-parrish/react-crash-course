import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import MainHeader from "../components/MainHeader";




function RootLayout() {
  return (
    <>
      <MainHeader />
        <Outlet />
    </>
  );
}

export default RootLayout;