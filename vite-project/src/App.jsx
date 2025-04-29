import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes, Route, Link } from "react-router-dom"


function App() {
  return(
  <BrowserRouter>
  <Link to="/">Go to | Home Page</Link>
  <br></br>
  <Link to="myland">Go to | Landing Page</Link>
  <br></br>
  <Link to="Educate">Go to | Educate yourself</Link>
  <Routes>
  <Route path='/' element={<Firstpg></Firstpg>}></Route>
    <Route path='/myland' element={<MyPage></MyPage>}></Route>
    <Route path='/Educate' element={<Youre></Youre>}></Route>
  </Routes>
  </BrowserRouter>
  ) 

}

function MyPage() {
  return(
    <div>
      Hello landing page
    </div>
  )
  
}

function Youre() {
  return(
    <div>
      Hello You are educated now ok
    </div>
  )
  
}

function Firstpg() {
  return(
    <div>
      This is the first page
    </div>
  )
  
}





export default App
