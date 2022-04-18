import { useState, useEffect } from "react";
import { deleteGame, getGame } from "../services/games";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from "react";

export default function GameDetails() {
  const [game, setGame] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      let thisGame = await getGame(id);
      setGame(thisGame);
    };
    fetchGame();
  }, [id]);

  return (
    <div>
      <h1>{game.name}</h1>
      <span>{game.image} </span>
      <span>{game.yearRelease} </span>
      <span>{game.console} </span>
      <span>{game.maxPlayerNumber} </span>
      <span>{game.onlinePlay} </span>
      <span>{game.playableCharacters} </span>
      <div>
        <button>
          <Link to={`/games/${game._id}/edit`}> Edit Game </Link>
        </button>
        <button
          onClick={() => {
            deleteGame(game._id);
            useNavigate("/games", { replace: true });
          }}>
          {" "}
          Delete Game{" "}
        </button>
      </div>
    </div>
  );
}
