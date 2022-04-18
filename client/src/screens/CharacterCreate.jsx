import { createCharacter } from "../services/characters";
import { useState } from "react";
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

  let navigate = useNavigate()
  
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
      <input
        autoFocus
        required
        placeholder="Name of Character"
        name="name"
        value={character.name}
        onChange={handleChange}
      />

      <input
        required
        placeholder="Link to Character image"
        name="image"
        value={character.image}
        onChange={handleChange}
      />

      <input
        placeholder="Character's first appearance"
        name="firstAppearance"
        value={character.firstAppearance}
        onChange={handleChange}
      />

      <input
        placeholder="Character's species"
        name="species"
        value={character.species}
        onChange={handleChange}
      />

      <input
        placeholder="Character's description"
        name="description"
        value={character.description}
        onChange={handleChange}
      />

      <button type="submit"> Submit New Character </button>
    </form>
  );
}
