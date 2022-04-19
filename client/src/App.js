import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./screens/Home";
import Characters from "./screens/Characters";
import CharacterCreate from "./screens/CharacterCreate";
import CharacterDetails from "./screens/CharacterDetails";
import CharacterEdit from "./screens/CharacterEdit";
import Games from "./screens/Games";
import GameCreate from "./screens/GameCreate";
import GameDetails from "./screens/GameDetails";
import GameEdit from "./screens/GameEdit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/characters/:id/edit" element={<CharacterEdit />} />
        <Route path="/add-character" element={<CharacterCreate />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/games/:id/edit" element={<GameEdit />} />
        <Route path="/add-game" element={<GameCreate />} />
      </Routes>
    </div>
  );
}

export default App;
