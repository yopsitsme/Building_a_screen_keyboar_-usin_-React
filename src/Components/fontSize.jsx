import React, { useState } from "react";
import fontSize from "../../data/fontSize";
export default function FontSize (props){
const[myFontSize,setMyFontSize]=useState(false);

    let fontSizes=fontSize;
    function fontHandel(e){
        props.setFountSize(e.target.value);
    }
    
    const fontButton=fontSizes.map((font,key)=>
    {return <button key={key} value={font} onClick={fontHandel}>
        {font}</button>})
       function fontSizeHandler(){
        setMyFontSize(!myFontSize);
       }
return(
    <div>
        <button onClick={fontSizeHandler}>font sizes↘️</button>
        {myFontSize && fontButton}
    </div>)
    
}

