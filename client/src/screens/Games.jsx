import React, { useState, useEffect } from "react";
import { getGames } from "../services/games.js";
import Game from "../components/Game.jsx";

export default function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await getGames();
      setGames(allGames);
    };
    fetchGames();
  }, []);

  return (
    <div>
      <h1> Games: </h1>
      {games.map((gameData) => (
        <Game key={gameData.name} game={gameData} />
      ))}
    </div>
  );
}
