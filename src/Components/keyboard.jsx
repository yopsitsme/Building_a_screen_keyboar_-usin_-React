import React from "react";
import hebrew from "../../data/hebrew";
import english from "../../data/english";
import numbers from "../../data/numbers";
import capsLock from "../../data/capsLock";
import Emoji from "../../data/Emoji";

export default function Keyboard(props) {
  let charecters = props.languageState;
  let hebrewArray = hebrew;
  let englishArray = english;
  let numbersArray = numbers;
  let capsLockArray = capsLock;
  let emojiArray = Emoji;
  let charecterKeyboard =
    charecters === "hebrew"
      ? hebrewArray
      : charecters === "english"
      ? englishArray
      : charecters === "capsLock"
      ? capsLockArray
      : charecters === "emoji"
      ? emojiArray
      : numbersArray;

  function outputHandler(e) {
    let myBold = "non";
    if (props.boldState) {
      myBold = "bold";
    }
    let myI = "non";
    if (props.italicizedState) {
      myI = "italic";
    }
    let letter = {
      myText: e.target.value,
      myStyle: {
        color: props.textColor,
        fontSize: `${props.fontSize}px`,
        fontWeight: myBold,
        fontStyle: myI,
      },
    };
    props.setInput((prevInputArry) => {
      return [...prevInputArry, letter];
    });
    props.undoArray.push(props.input);
    console.log(props.undoArray);
  }

  return (
    <>
      {charecterKeyboard.map((value, key) => {
        return (
          <button key={key} value={value} onClick={outputHandler}>
            {value}
          </button>
        );
      })}
    </>
  );
}
