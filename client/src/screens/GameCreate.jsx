import { createGame } from "../services/games";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GameCreate() {
  const [game, setGame] = useState({
    name: "",
    image: "",
    yearRelease: Number,
    console: "",
    maxPlayerNumber: Number,
    onlinePlay: false,
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
      <input
        autoFocus
        required
        placeholder="Name of Game"
        name="name"
        value={game.name}
        onChange={handleChange}
      />

      <input
        required
        placeholder="Link to Game image"
        name="image"
        value={game.image}
        onChange={handleChange}
      />

      <input
        placeholder="Game's release year"
        name="yearRelease"
        value={game.yearRelease}
        onChange={handleChange}
      />

      <input
        placeholder="Game console"
        name="console"
        value={game.console}
        onChange={handleChange}
      />

      <input
        placeholder="Max number of player(s) for game"
        name="maxPlayerNumber"
        value={game.maxPlayerNumber}
        onChange={handleChange}
      />

      <input
        placeholder="Playable Character(s)"
        name="playableCharacters"
        value={game.playableCharacters}
        onChange={handleChange}
      />

      <button type="submit"> Submit New Game </button>
    </form>
  );
}
