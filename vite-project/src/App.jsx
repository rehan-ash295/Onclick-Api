import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  let [bulstate, setstate]= useState("https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?w=2000")
  return(
    <div>
      
      <Bulbstate bulstate={bulstate}></Bulbstate>
      <StateChange bulstate={bulstate} setstate={setstate}></StateChange>
    </div>
  )

 
}

function Bulbstate({bulstate}){
  return <div>
    <img src={bulstate} style={{width:90, height:90}}></img>

  </div>
}

function StateChange({bulstate,setstate}){
  function ChangeLight(){
    const lightON="https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?w=2000"
    const lightOff="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?cs=srgb&dl=light-light-bulb-idea-577514.jpg&fm=jpg"
    setstate(bulstate === lightON ? lightOff : lightON)

  }
  return <div>
  <button onClick={ChangeLight}>Switch Light</button>

  </div>
}


export default App
