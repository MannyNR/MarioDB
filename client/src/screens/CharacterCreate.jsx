import React, { useState } from "react";
import { createCharacter } from "../services/characters";
import { useNavigate } from "react-router-dom";

export default function CharacterCreate() {
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    firstAppearance: "",
    goodGuy: true,
    species: "",
    description: "",
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({
      ...character,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCharacter(character);
    navigate("/characters", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlfor="name"> Name of Character: </label>
        <input
          autoFocus
          required
          placeholder="Name"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="image"> Link to character's image: </label>
        <input
          required
          placeholder="Link to image"
          name="image"
          value={character.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="firstAppearance"> Character's first appearance: </label>
        <input
          placeholder="First appearance"
          name="firstAppearance"
          value={character.firstAppearance}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="goodGuy"> Is character a hero? </label>
        <input
          placeholder="true if good, false if bad"
          name="goodGuy"
          value={character.goodGuy}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="species"> Character's species: </label>
        <input
          placeholder="Species"
          name="species"
          value={character.species}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="description"> Character's description: </label>
        <input
          placeholder="Character's description"
          name="description"
          value={character.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit"> Submit New Character </button>
    </form>
  );
}
