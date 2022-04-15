import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Character = new Schema({
  name: "string",
  firstAppearance: "string",
  goodGuy: Boolean,
  species: "string",
  descritpions: "string",
});

export default mongoose.model("characters", Character);
