import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const allCharacters = await getCharacters();
      setCharacters(allCharacters);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1> Characters: </h1>
      {characters.map((characterData) => (
        <Character key={characterData.name} character={characterData} />
      ))}
    </div>
  );
}
