import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Layout = () => {
  const [headerHeight, setHeaderHeight] = useState<number | string>("120");

  return (
    <div
      style={{ paddingTop: `${headerHeight}px` }}
      className={`bg-surface-secondary`}
    >
      <Header setHeaderHeight={setHeaderHeight} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
