import React from "react";
import {Outlet} from 'react-router-dom'
import NavBar from "./NavBar";

const Layout = () => {
    return (
      <div className="min-h-screen">
        <NavBar />
        <main className="w-full">
          <Outlet />
        </main>
        
      </div>
    )
}

export default Layout