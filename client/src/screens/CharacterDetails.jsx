import React, { useState, useEffect } from "react";
import { deleteCharacter, getCharacter } from "../services/characters";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const fetchCharacter = async () => {
      let thisCharacter = await getCharacter(id);
      setCharacter(thisCharacter);
    };
    fetchCharacter();
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt="Game" />
      <p>
        <label htmlFor="firstAppearance">
          {" "}
          First appearance: {character.firstAppearance}{" "}
        </label>
      </p>

      <p>
        <label htmlFor="goodGuy">
          {" "}
          Is character a hero? {character.goodGuy ? "Yes" : "No"}{" "}
        </label>
      </p>

      <p>
        <label htmlFor="species"> Species? {character.species} </label>
      </p>

      <p>
        <label htmlFor="description"> Bio: {character.description} </label>
      </p>

      <div>
        <button>
          <Link to={`/characters/${character._id}/edit`}> Edit Character </Link>
        </button>
        <button
          onClick={() => {
            deleteCharacter(character._id);
            navigate("/characters", { replace: true });
          }}>
          {" "}
          Delete Character
        </button>
      </div>
    </div>
  );
}
