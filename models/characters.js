import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Character = new Schema({
  name: { type: String, required: true },
  firstAppearance: { type: String },
  goodGuy: { type: Boolean },
  species: { type: String },
  descritpions: { type: String },
});

export default mongoose.model("characters", Character);
