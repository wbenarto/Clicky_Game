//sets up the reusable Navbar component
import React from "react";
import "./style.css";

const Navbar = props => (
  <nav>

    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
        <h1 id="edition">{props.sub}</h1>
      </li>
     
      <li id="result">{props.result}</li>

      <li id="score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>

    <p id="sub">{props.direction}</p>
  </nav>
);


export default Navbar;