import React from "react"
export default function InputHolder(props){
    return(
        <>
           <p className="inputHolder">
            {props.input.map((letter,index)=>
            { return (<span key={index} style={letter.myStyle}>
                {letter.myText}
                </span>)})}
        </p>
        </>
    )
}