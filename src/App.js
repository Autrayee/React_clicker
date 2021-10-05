//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";




function App() {
  const [ counter, setCounter]= useState(0);
  const AddCount=()=>{
    setCounter(counter+1);
  };
  const MinusCount=()=>{
    setCounter(counter-1);
  };
  const ResetCount=()=>{
    setCounter(0);
  };
return (
    <div>
      <div className="App">
       <div className="main">{counter}</div>
       <div >
        <button className="btn green" onClick={()=>AddCount()}>+</button>
        <button className="btn yellow" onClick={()=>ResetCount()} >reset</button>
        <button className="btn red" onClick={()=>MinusCount()}>-</button>
       </div>
      </div>
    </div>
      
)

}

export default App;
