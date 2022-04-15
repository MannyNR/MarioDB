import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Game = new Schema({

  name: { type: String },
  yearRelease: { type: Number },
  console: { type: String },
  maxPlayerNumber: { type: Number },
  onlinePlay: { type: Boolean },
  playableCharacters: [{ type: Schema.Types.ObjectId, ref: "characters" }]
});

export default mongoose.model("games", Game);