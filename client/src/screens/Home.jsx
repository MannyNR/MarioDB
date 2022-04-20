import React, {useState } from "react";
import image from "./mariogroup.jpeg";
import GameList from "../components/GameList";
import CharacterGrid from "../components/CharacterGrid";

const Home = ({characters}) => {



  const [currentGame, setCurrentGame] = useState(null)

  return (
    <div className="home-screen">
      <GameList setCurrentGame={ setCurrentGame}   >Games</GameList>
      <div>
        {currentGame ?<h1>{currentGame.name}</h1>: <p>It's me Mario! Welcome to our site!</p>}
       {currentGame ? <CharacterGrid currentGame={currentGame} characters={characters} />: <img src={image} alt="" />}
      </div>
    </div>
  );
};

export default Home;
