import './App.css'
import React, { useState } from 'react';
import "./index.css";
import Language from './Components/language';
import Keyboard from './Components/keyboard';
import InputHolder from './Components/inputHolder';
import Operations from './Components/operations';
import Design from './Components/colors';
import FontSize from './Components/fontSize';
import Undo from './Components/undo';

function App() {
const [languageState, setLanguageState] = useState("hebrew");
const [input,setInput]=useState([]);
const [textColor,setTextColor]=useState('black');
const[fontSize,setFountSize]=useState(12);
const[italicizedState,setItalicizedState]=useState(false);
const[boldState,setBoldState]=useState(false);
const[undoArray,setUndoArray]=useState([])
  return (
    <>
      <InputHolder input={input} />
      <div className='keboard'>
        <Keyboard undoArray={undoArray} setUndoArray={setUndoArray}languageState={languageState} 
        setInput={setInput} input={input} textColor={textColor} 
        fontSize={fontSize} boldState={boldState} italicizedState={italicizedState}/>
      </div>
      <Language languageState={languageState} setLanguageState={setLanguageState} />
      <Operations setInput={setInput} input={input} italicizedState={italicizedState} 
      setItalicizedState={setItalicizedState} boldState={boldState} setBoldState={setBoldState} undoArray={undoArray}/>
      <Design setTextColor={setTextColor}/>
      <FontSize setFountSize={setFountSize}/>
      <Undo setInput={setInput} undoArray={undoArray} setUndoArray={setUndoArray} setFountSize={setFountSize}
      setTextColor={setTextColor} setBoldState={setBoldState} setItalicizedState={setItalicizedState}/>
    </>
  )
}

export default App
