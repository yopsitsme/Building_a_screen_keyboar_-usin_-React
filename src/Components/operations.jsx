import React from "react";
import operation from "../../data/operation";
export default function Operations(props) {
  let operations = operation;
  function operationHandel(e) {
    let currentOperation = e.target.value;
    currentOperation === "reset"
      ? reset()
      : currentOperation === "upperCase"
      ? upperCase()
      : currentOperation === "delete"
      ? eraese()
      : currentOperation === "lowerCase"
      ? lowerCase()
      : currentOperation === "bold"
      ? bold()
      : italicized();
  }
  function reset() {
    props.setInput([]);
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  function upperCase() {
    props.setInput(
      props.input.map((letter) => {
        let copyLetter = { ...letter };
        copyLetter.myText = letter.myText.toUpperCase();
        return copyLetter;
      })
    )
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  function lowerCase() {
    props.setInput(
      props.input.map((letter) => {
        let copyLetter = { ...letter };
        copyLetter.myText = letter.myText.toLowerCase();
        return copyLetter;
      })
    )
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  function eraese() {
    const index = props.input.lastIndexOf();
    props.setInput(props.input.slice(0, index));
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  function bold() {
    props.setBoldState(!props.boldState);
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  function italicized() {
    props.setItalicizedState(!props.italicizedState);
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }
  const operationButton = operations.map((operation, key) => {
    return (
      <button key={key} value={operation} onClick={operationHandel}>
        {operation}
      </button>
    );
  });
  return <div>{operationButton}</div>;
}
