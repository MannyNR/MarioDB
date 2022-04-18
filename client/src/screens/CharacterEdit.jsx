import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateCharacter, getCharacter } from "../services/characters";

export default function CharacterEdit() {
  const [character, setCharacter] = useState({
    name: "",
    image: "",
    firstAppearance: "",
    goodGuy: true,
    species: "",
    description: "",
  });

  const { id } = useParams();
  useEffect(() => {
    const fetchCharacter = async () => {
      let thisCharacter = await getCharacter(id);
      setCharacter(thisCharacter);
    };
    fetchCharacter();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({
      ...character,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateCharacter(character);
    useNavigate("/characters", { replace: true });
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

      <button type="submit"> Update character profile </button>
    </form>
  );
}
