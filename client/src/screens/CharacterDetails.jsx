import { useState, useEffect } from "react";
import { deleteCharacter, getCharacter } from "../services/characters";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from "react";

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
        <label htmlfor="firstAppearance">
          {" "}
          First appearance: {character.firstAppearance}{" "}
        </label>
      </p>

      <p>
        <label htmlfor="goodGuy">
          {" "}
          Is character good or bad? (Type in true or false): {
            character.goodGuy
          }{" "}
        </label>
      </p>

      <p>
        <label htmlfor="species"> Species? {character.species} </label>
      </p>

      <p>
        <label htmlfor="description"> Bio: {character.description} </label>
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
          Delete Character{" "}
        </button>
      </div>
    </div>
  );
}
