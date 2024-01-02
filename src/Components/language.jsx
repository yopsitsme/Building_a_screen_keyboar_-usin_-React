import React,{useState} from "react";
import language from "../../data/language";
export default function Language (props){


    let languages=language;
    function languageHandel(e){
        props.setLanguageState(e.target.value);
    }
    const languageButton=languages.map((language,key)=>{return <button key={key} value={language.value} onClick={languageHandel}>{language.ui}</button>})
return(
    <div>
   {languageButton}
</div>
)

}