import { useEffect, useRef, useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function useCounter(){
  const [count, setCount]= useState(0)
  function CountUpdtate(){
    setCount(count+1)
  }

  return {
    count:count,
    CountUpdtate:CountUpdtate
  }

}
function App() {

  const {count, CountUpdtate}= useCounter()
  
  
  return(
    <div>
      <button onClick={CountUpdtate}>Counter {count}</button>
    </div>
    //not 
  )
  

  
}



export default App
