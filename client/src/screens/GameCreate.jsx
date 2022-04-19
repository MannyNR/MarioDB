import React, { useState } from "react";
import { createGame } from "../services/games";
import { useNavigate } from "react-router-dom";

export default function GameCreate() {
  const [game, setGame] = useState({
    name: "",
    image: "",
    yearRelease: Number,
    console: "",
    maxPlayerNumber: Number,
    onlinePlay: Boolean,
    playableCharacters: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({
      ...game,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createGame(game);
    navigate("/games", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name"> Name of game: </label>
        <input
          autoFocus
          required
          placeholder="Name"
          name="name"
          value={game.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="image"> Link to image of game: </label>
        <input
          required
          placeholder="Link to image"
          name="image"
          value={game.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="yearRelease"> Game's release year: </label>
        <input
          placeholder="Year of release"
          name="yearRelease"
          value={game.yearRelease}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="console"> Game console: </label>
        <input
          placeholder="Game console"
          name="console"
          value={game.console}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="maxPlayerNumber"> Max number of players: </label>
        <input
          placeholder="Max number of player(s)"
          name="maxPlayerNumber"
          value={game.maxPlayerNumber}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="onlinePlay"> Playable Online? </label>
        <input
          placeholder="Enter true or false"
          name="onlinePlay"
          value={game.onlinePlay}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="playableCharacters"> Playable Characters: </label>
        <input
          placeholder="Playable Character(s)"
          name="playableCharacters"
          value={game.playableCharacters}
          onChange={handleChange}
        />
      </div>

      <button type="submit"> Submit New Game </button>
    </form>
  );
}
