import React, { Component } from 'react'
import getCurrentSeed from "../lib/getCurrentSeed";
import getRandomWithSeed from "../lib/getRandomWithSeed";
import adjectives from "../json/adjectives.json";
import characters from "../json/characters.json";
import colours from "../json/colours.json";
import items from "../json/items.json";
import rooms from "../json/rooms.json";
import Rule from "./Rule";

export default class ChallengeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      seed: getCurrentSeed(),
    };
  }
  
  render() {
    const { seed } = this.state;
    
    const [playableCharacter] = getRandomWithSeed(characters, seed);
    const [endingRoom] = getRandomWithSeed(rooms, seed);
    const [colour] = getRandomWithSeed(colours, seed);
    const [adjective] = getRandomWithSeed(adjectives, seed);

    return (
      <>
        <div className="page-title">
          <h1>BoI: Challenge Generator</h1>
        </div>
        <div className="challenge-title">
          <span id="title-adjective">{adjective}</span>{" "}
          <span id="title-colour" style={{color: colour.hex}}>{colour.name}</span>{" "}
          <span id="title-character">{playableCharacter}</span>
        </div>
        <Rule />
        
      </>
    );
  }
}