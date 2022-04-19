import React, { useState, useEffect } from "react";
import { deleteGame, getGame } from "../services/games";
import { Link, useParams, useNavigate } from "react-router-dom";
import Character from "../components/Character";

export default function GameDetails({ characters }) {
  const [game, setGame] = useState({});
  const [gameCharacters, setGameCharacters] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      let thisGame = await getGame(id);

      let gameChars = [];

      thisGame.playableCharacters.forEach((player) => {
        characters.forEach((character) => {
          if (character.name === player) {
            gameChars.push(character);
          }
        });
      });

      setGame(thisGame);
      setGameCharacters(gameChars);
    };

    fetchGame();
  }, [id]);

  return (
    <div>
      <h1>{game.name}</h1>
      <img src={game.image} alt="Game" />
      <p>
        <label htmlFor="yearRelease">
          {" "}
          Year of release:{game.yearRelease}{" "}
        </label>
      </p>

      <p>
        <label htmlFor="console"> Game console: {game.console} </label>
      </p>

      <p>
        <label htmlFor="maxPlayerNumber">
          {" "}
          Max number of players: {game.maxPlayerNumber}{" "}
        </label>
      </p>

      <p>
        <label htmlFor="onlinePlay">
          {" "}
          Playable online? {game.onlinePlay ? "Yes" : "No"}{" "}
        </label>
      </p>

      <p>
        <label htmlFor="playableCharacters">
          {" "}
          Playable characters: {game.playableCharacters}{" "}
        </label>
      </p>
      {gameCharacters.length &&
        gameCharacters.map((char) => <Character character={char} />)}

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
