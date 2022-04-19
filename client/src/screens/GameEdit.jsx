import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateGame, getGame } from "../services/games";

export default function GameEdit() {
  const [game, setGame] = useState({
    name: "",
    image: "",
    yearRelease: Number,
    console: "",
    maxPlayerNumber: Number,
    onlinePlay: false,
    playableCharacters: "",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchGame = async () => {
      let thisGame = await getGame(id);
      setGame(thisGame);
    };
    fetchGame();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGame({
      ...game,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGame(game);
    navigate("/games", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlfor="name"> Name of game: </label>
        <input
          autoFocus
          required
          placeholder="Name of Game"
          name="name"
          value={game.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="image"> Link to image of game: </label>
        <input
          required
          placeholder="Link to Game image"
          name="image"
          value={game.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="yearRelease"> Game's release year: </label>
        <input
          placeholder="Game's release year"
          name="yearRelease"
          value={game.yearRelease}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="console"> Game console: </label>
        <input
          placeholder="Game console"
          name="console"
          value={game.console}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="maxPlayerNumber">
          {" "}
          Max number of players for game:{" "}
        </label>
        <input
          placeholder="Max number of player(s) for game"
          name="maxPlayerNumber"
          value={game.maxPlayerNumber}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="playableCharacters"> Playable Characters: </label>
        <input
          placeholder="Playable Character(s)"
          name="playableCharacters"
          value={game.playableCharacters}
          onChange={handleChange}
        />
      </div>

      <button type="submit"> Update game profile </button>
    </form>
  );
}
