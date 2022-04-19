import React, { useState, useEffect } from "react";
import { getCharacters } from "../services/characters.js";
import Character from "../components/Character.jsx";

export default function Characters({ characters }) {

  return (
    <div>
      <h1> Characters: </h1>
      {characters.map((characterData) => (
        <Character key={characterData._id} character={characterData} />
      ))}
    </div>
  );
}
