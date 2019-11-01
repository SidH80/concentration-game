import React from "react";
import "./style.css";


function NavBar(props) {
    return (
        <nav>
        <ul>
          <li className="">
            <a href="/clicky-game/">{props.title}</a>
          </li>

          <li id="">{props.rightWrong}</li>

          <li id="">Current Score: {props.score}</li>

          <li id="">Top Score: {props.topScore}</li>
        </ul>
      </nav>
    )
}

export default NavBar;