import Styles from './calculator.module.css';
import Buttons from './buttons.jsx';
import Display from './display.jsx';
import { useState } from 'react';


export default function Calculator() {
  let [displayVal,setDisplayVal] = useState("");
  const buttonClicked = (btn) => {
    if(btn==="C"){
      setDisplayVal("");
    }
    else if(btn==="="){
      const result = eval(displayVal);
      setDisplayVal(result);
    }
    else{
      let newValue = displayVal + btn;
      setDisplayVal(newValue)
    }
  }
  
  return(
    <>
    <div className={Styles.calculator}>
    <Display valueprop={displayVal}></Display>
    <Buttons buttonClicked={buttonClicked}></Buttons>
    </div>
    </>
    )
}