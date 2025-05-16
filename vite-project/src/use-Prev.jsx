import { useState, useEffect, useRef } from "react";


function App() {
    let [value, setvalue]= useState(0);
    const previous= usePrev(value);
    return(
      <div>
        <p>Current value is : {value} </p>
        <button onClick={()=>{setvalue(value+1)}}>CLick me</button>
        <p>Previous value is : {previous}</p>
      </div>
      //Demo
    )
    
    
  
    
  }
  
  export default App

  

export function usePrev(value) {
    const prev= useRef();
    


    useEffect(()=>{
        prev.currentCount= value

    },[value])

    return(
        prev.currentCount

    )


    
}