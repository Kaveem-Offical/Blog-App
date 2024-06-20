import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function Layout() {
  return (
    <main>
      <Header />
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}

export default Layout;
