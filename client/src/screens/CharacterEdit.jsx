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

  let navigate = useNavigate();
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
    navigate("/characters", { replace: true });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlfor="name"> Name of Character: </label>
        <input
          autoFocus
          required
          placeholder="Name of Character"
          name="name"
          value={character.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="image"> Link to character's image: </label>
        <input
          required
          placeholder="Link to Character image"
          name="image"
          value={character.image}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="firstAppearance"> Character's first appearance: </label>
        <input
          placeholder="Character's first appearance"
          name="firstAppearance"
          value={character.firstAppearance}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlfor="species"> Character's species: </label>
        <input
          placeholder="Character's species"
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
      <button type="submit"> Update character profile </button>
    </form>
  );
}
