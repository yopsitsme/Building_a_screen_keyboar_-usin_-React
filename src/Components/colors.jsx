import React, { useState } from "react";
import design from "../../data/designColor";

export default function Design(props) {
  const [myColor, setMyColor] = useState(false);
  let designs = design;

  function designHandel(e) {
    let color = e.target.value;
    props.setTextColor(color);
  }

  function colorHandler() {
    setMyColor(!myColor);
  }

  const designButton = designs.map((design, key) => (
    <button key={key} style={{ color: design }} value={design} onClick={designHandel}>
      {design}
    </button>
  ));

  return (
    <div>
      <button onClick={colorHandler}>colors↘️</button>
      {myColor && designButton}
    </div>
  );
}
