import { NavLink } from "react-router-dom";
import React from "react";

export default function Nav() {
  return (
    <nav>
      <div className="button">
        <NavLink to="/"> Home </NavLink>
        <div>
          <NavLink to="/characters"> All Characters </NavLink>
          <NavLink to="/add-character"> Add Character </NavLink>

          <NavLink to="/games"> All Games </NavLink>
          <NavLink to="/add-game"> Add Game </NavLink>
        </div>
      </div>
    </nav>
  );
}
