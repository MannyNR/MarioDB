import React, { useState, useEffect } from "react";
import Characters from "../screens/Characters";
import Character from "./Character";
import { getCharacter } from "../services/characters";


export default function CharacterGrid({currentGame, characters}) {
  const [gameCharacters, setGameCharacters] = useState([]);
  
  const toggleInfo = () => {
    const characterInfo = document.querySelector(".character-info")
    if(characterInfo.style.display = "none")
    { characterInfo.style.display = "block" } 
   else 
    { characterInfo.style.display = "none" } 
  
 }
  

 

      let gameChars = [];

      currentGame.playableCharacters.forEach((player) => {
        characters.forEach((character) => {
          if (character.name === player) {
            gameChars.push(character);
          }
        });
      });
  console.log(currentGame.playableCharacters)
  

  return (
   
      
      
    <div className="character-grid">
      
      <div className="character-box">
        
        {gameChars.map(character => (
          <img onClick={toggleInfo} src={character.image} />))}

        {gameChars.map(character => (
          <div className="character-info">
      <p>{character.name}</p>
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

    
 
          </div>
        ))}
</div>
      </div>


  
  )
      
      
      
      
      
}