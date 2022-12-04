import React from "react";
import { NavLink } from "react-router-dom";

//This is where to link primary CSS for navbar

function Navigation() {
  return (
    <div>

      <NavLink
        to="/"
        exact
      >
        Home
      </NavLink>
      
      <NavLink
        to="/creations"
        exact
      >
        Creations
      </NavLink>

      <NavLink
        to="/creations/new"
        exact
      >
        New
      </NavLink>

      <NavLink
        to="/about"
        exact
      >
        About
      </NavLink>
      
    </div>
  );
}

export default Navigation