import { useState, useEffect } from "react";
import { deleteGame, getGame } from "../services/games";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from "react";

export default function GameDetails() {
  const [game, setGame] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

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
      <img src={game.image} />
      <p>{game.yearRelease} </p>
      <p>{game.console} </p>
      <p>{game.maxPlayerNumber} </p>
      <p>{game.onlinePlay} </p>
      <p>{game.playableCharacters} </p>
      <div>
        <button>
          <Link to={`/games/${game._id}/edit`}> Edit Game </Link>
        </button>
        <button
          onClick={() => {
            deleteGame(game._id);
            navigate("/games", { replace: true });
          }}>
          {" "}
          Delete Game{" "}
        </button>
      </div>
    </div>
  );
}
