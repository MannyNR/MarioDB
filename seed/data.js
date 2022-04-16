import db from "../db/connection.js";
import Game from "../models/games.js";
import Character from "../models/characters.js";
import games from "./games.json" assert { type: "json" };
import characters from "./characters.json" assert { type: "json" };

const insertData = async () => {
  db.dropDatabase();

  await Character.insertMany(characters);

  await Game.insertMany(games);

  db.close();
};
insertData();