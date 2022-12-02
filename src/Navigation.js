import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>

      <NavLink
        to="/"
        exact
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>
      
      <NavLink
        to="/creations"
        exact
        activeStyle={{
          background: "black",
        }}
      >
        Creations
      </NavLink>

      <NavLink
        to="/creations/new"
        exact
        activeStyle={{
          background: "black",
        }}
      >
        New
      </NavLink>
      
    </div>
  );
}

export default Navigation