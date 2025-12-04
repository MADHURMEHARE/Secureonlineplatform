import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  // Dynamic navigation data
  const navLinks = [
     { path: "/course", label: "Courses" },
    { path: "/about", label: "About" },
    // { path: "/home", label: "Home" },
    // { path: "/course", label: "Courses" },
    // {path:"/chapter",label:"Chapter"}
  ];

  return (
    <nav className="w-full h-16 bg-black text-white shadow-lg flex items-center">
      <div className="w-11/12 mx-auto flex justify-between items-center">
        
        {/* LOGO + TITLE */}
        <div className="flex items-center gap-3">
          <img
            alt="logo"
            src="https://cdn-icons-png.flaticon.com/512/4903/4903482.png"
            className="w-8 h-8"
          />
          <h2 className="text-xl font-bold tracking-wide">Your App</h2>
        </div>

        {/* DYNAMIC LINKS */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg transition duration-200 ${
                  isActive ? "text-blue-400 font-semibold" : "hover:text-blue-300"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <button className="px-4 py-1 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Nav;
