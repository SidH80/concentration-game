import React from "react";
import "./style.css";

function CityCard(props) {
    return (

      <div className="img-container"
          value={props.id}
          onClick={() => props.handleClick(props.id)}
        >

        <div>
          <img alt={props.name} src={props.image} />
      </div>
      </div>
    );
  }

  export default CityCard;