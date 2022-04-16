import db from "../db/connection.js";
import Character from "../models/character.js";
import Game from "../models/game.js";
import characters from "./characters.json" assert { type: "json" };
import games from "./games.json" assert { type: "json" };

const insertData = async () => {
  db.dropDatabase();

  await Character.insertMany(characters);

  await Game.insertMany(games);

  db.close();
};
insertData();