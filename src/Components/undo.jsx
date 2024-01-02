import React from "react";

export default function Undo(props) {
  function undoHandel() {
    let lastChange = props.undoArray.pop();
    props.setInput(lastChange);
    let lastIndex = lastChange.length - 1;
    props.setTextColor(lastChange[lastIndex].myStyle.color);
    props.setFountSize(lastChange[lastIndex].myStyle.fontSize);
    props.setItalicizedState(lastChange[lastIndex].myStyle.fontStyle);
    props.setBoldState(lastChange[lastIndex].myStyle.fontWeight);
  }
  return (
     <button disabled={ props.undoArray.length!==0?false:true} onClick={undoHandel}>undo</button>
  );
}
