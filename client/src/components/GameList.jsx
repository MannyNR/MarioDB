import { useState } from "react";
import React from "react";
import { GameLink } from "react-router-dom"
export default function GameList(props) {

  return (
    <nav>
      <div className="game-list">
        <button onClick={() => props.setCurrent('marioKart')}>Mario Kart 64 </button>
        <button onClick={() => props.setCurrent('donkeyKong')}> Donkey Kong</button>
        <button onClick={() => props.setCurrent('marioBros')}> Mario Bros</button>
        <button onClick={() => props.setCurrent('superMarioBros')}> Super Mario Bros</button>
        <button onClick={() => props.setCurrent('smashMelee')}> Smash Bros Melee</button>
        <button onClick={() => props.setCurrent('bowsersInsideStory')}> Mario and Luigi: Bowser's Inside Story</button>
        <button onClick={() => props.setCurrent('marioTennisAces')}> Mario Tennis Aces</button>
        <button onClick={() => props.setCurrent('princessPeach')}> Super Princess Peach</button>
        <button onClick={() => props.setCurrent('marioMaker')}>Super Mario Maker 2</button>
        <button onClick={() => props.setCurrent('marioWorld')}>Super Mario World</button>


      </div>


    </nav>
  )
}