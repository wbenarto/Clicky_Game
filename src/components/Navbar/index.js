//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

const Navbar = props => {
  <nav>
    <ul>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="result">{props.result}</li>

      <li id="score">Current Score: {props.score}</li>

      <li id="top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
};


export default Navbar;