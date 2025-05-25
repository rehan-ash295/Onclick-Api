import { useEffect, useRef, useState, createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import {DefaultValue, RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState, atom} from "recoil"
import { NetworkAtom, MessageAtom,ConnectionAtom ,RequestAtom, TotatValueSelector } from './Atom'

function App() {
 return(
  <div>
    <RecoilRoot>
      <MainApp></MainApp>
    </RecoilRoot>

    

    
  </div>
 )

}

function MainApp(){
  const NetworkValue= useRecoilValue(NetworkAtom);
  const Messagevalue= useRecoilValue(MessageAtom);
  const ConnectionValue= useRecoilValue(ConnectionAtom);
  const RequestValue= useRecoilValue(RequestAtom);
  const TotalcntValue= useRecoilValue(TotatValueSelector);
  return(
    <div style={{display: "flex"}}>
      <button>Network {NetworkValue>=100 ? "99+" : NetworkValue}</button>
      <br></br>
      <button>Message {Messagevalue}</button>
      <br></br>
      <button>Connection {ConnectionValue}</button>
      <br></br>
      <button>Request {RequestValue} </button>
      <br></br>
      <button>Total Count is {TotalcntValue}</button>
    </div>
  )
}

import {atom, selector} from "recoil"

export const NetworkAtom= atom({
    key: "network",
    default: 100
})
export const MessageAtom= atom({
    key: "Message",
    default: 8
})
export const ConnectionAtom= atom({
    key: "Connection",
    default: 0
})
export const RequestAtom= atom({
    key: "Request",
    default: 0
})

export const TotatValueSelector= selector({
    key: "TotalCnt",
    get: ({get})=>{
        const NetworkValue= get(NetworkAtom);
        const MessaageValue=get(MessageAtom);
        const ConnectionValue=get(ConnectionAtom);
        const RequestValue=get(RequestAtom);
        return NetworkValue + MessaageValue + ConnectionValue + RequestValue

    
        
    }
})



export default App
