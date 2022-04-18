import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Character = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  firstAppearance: { type: String },
  goodGuy: { type: Boolean },
  species: { type: String },
  description: { type: String },
});

export default mongoose.model("characters", Character);
