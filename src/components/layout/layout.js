import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <main >
        <Outlet/>
      </main>
    </>
  );
}

export default Layout;
