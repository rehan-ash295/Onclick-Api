import { useEffect, useRef, useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {DefaultValue, RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState, atom} from "recoil"
import {atomFamilyData} from './Atom'
import axios from 'axios'

function App() {
 


  return(
    <div>
      <RecoilRoot>
        <Updater></Updater>
     
      <MainApp id={1}></MainApp>
      <MainApp id={5}></MainApp>
     
      
      </RecoilRoot>
      

    </div>
    
  )



}

function Updater(){
  const  setidchange =useSetRecoilState(atomFamilyData(5))
  useEffect(()=>{
    setTimeout(()=>{
      setidchange(
        {
          "userId": 1,
          "id": 5,
          "title": "changed new",
          "completed": false
        }
      )

    },5000)

  },[])
  
}



function MainApp({id}){
  const [networkcount]= useRecoilState(atomFamilyData(id));
  console.log(networkcount);
  


  return(
    <div>
      <button>ID {networkcount.id}</button>
      <button>Title {networkcount.title}</button>
      <button>Completed {networkcount.completed}</button>
    </div>
  )
}





export default App
import { atom, selector,atomFamily} from "recoil"
import axios from 'axios'
//import {Todos} from "./Todos"

const Todos=[{
    "userId": 1,
  "id": 1,
  "title": "Hello nick",
  "completed": false

},{
    "userId": 1,
  "id": 5,
  "title": "bdbfbf gdgdgfghfgh gdgdfgdf",
  "completed": false
}]

export const atomFamilyData =atomFamily({
    key: "atomFam",
    default: (id)=> {
        return Todos.find(k=>k.id===id)
}


})

