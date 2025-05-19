import { useEffect, useRef, useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"




const useDebounce =(data, delay)=>{
  const [debounceM, setDebounce]= useState(data);
  useEffect(()=>{
   let controller= setTimeout(()=>{
    setDebounce(data)

   },delay)

    return ()=>{
      clearTimeout(controller)
    }

  },[data,delay])


  return debounceM


}


function App() {
  const[data, setdata]=useState("")
  const Debounced= useDebounce(data, 1000)

  function DataInp(e){
    setdata(e.target.value)

  }

  useEffect(()=>{
    //hii
    console.log("Expensive Operation")
  },[Debounced])
  return(
    <div>

      <input type='text' onChange={DataInp}></input>

    </div>
  )
  
}







export default App
