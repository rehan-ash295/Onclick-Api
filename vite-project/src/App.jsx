import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [currentTab, setTab]= useState(1)
  const [tabdata, setJso]= useState({})

  useEffect(function(){

    fetch('https://jsonplaceholder.typicode.com/todos/'+ currentTab)
      .then( async response => {
        const json= await response.json();
        setJso(json);
      })
  },[currentTab])

  return(
    <div>
      <button onClick={function(){setTab(1)}} style={{color: currentTab==1 ? "red" : "black"}}>To-do 1</button>
      <button onClick={function(){setTab(2)}} style={{color: currentTab==2 ? "red" : "black"}}>To-do 2</button>
      <button onClick={function(){setTab(3)}} style={{color: currentTab==3 ? "red" : "black"}}>To-do 3</button>
      <br></br>
      {tabdata.title}
    </div>
  )

}





export default App
