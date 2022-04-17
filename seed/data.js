import db from "../db/connection.js";
import Character from "../models/character.js";
import Game from "../models/game.js";
import characters from "./characters.json" assert { type: "json" };
import games from "./games.json" assert { type: "json" };

const insertData = async () => {
  db.dropDatabase();
  
  let addCharacter = [];
  for (let i = 0; i < characters.length; i++) {
    addCharacter.push({
      name: characters[i].name,
      image: characters[i].image,
      firstAppearance: characters[i].firstAppearance,
      goodGuy: characters[i].goodGuy,
      species: characters[i].species,
      description: characters[i].description,
    })
  }
  await Character.insertMany(characters);

  await Game.insertMany(games);

  db.close();
};
insertData();