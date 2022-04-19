import React from "react";
import { Link } from "react-router-dom";

export default function Game({ game }) {
  return (
    <div>
      <Link to={`/games/${game._id}`}>
        <h1> {game.name} </h1>
      </Link>
    </div>
  );
}
