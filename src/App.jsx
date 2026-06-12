import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
///import './App.css'
import {Header} from "./components/Header"
import { Footer } from './components/Footer'
import Content from './components/Content'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { Route, Routes } from 'react-router-dom'
import { Movis } from './components/hotstar/Movis'
import { Shows } from './components/hotstar/Shows'
import { Navbar } from './components/Navbar'
import { Watch } from './components/hotstar/Watch'
import { Teams } from './components/hotstar/Teams'
import { TeamDetail } from './components/hotstar/TeamDetail'
import { Questions } from './components/Questions'
import { QuestionDetail } from './components/QuestionDetail'
import { FuncCall } from './components/FuncCall'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'

function App() {
  

  return (
    
    <div>
      <Navbar></Navbar>
      <Routes>
          <Route path='/movies' element = {<Movis/>}></Route>
          <Route path='/shows' element ={<Shows/>}></Route>
          <Route path='/watch/:name' element ={<Watch/>}></Route>
          <Route path='/teams' element = {<Teams/>}></Route>
          <Route path='/teamdetail/:id' element ={<TeamDetail/>}></Route>
          <Route path='/questions' element ={<Questions/>}></Route>
          <Route path='/questiondetail' element ={<QuestionDetail/>}></Route>
          <Route path='/funcall' element  = {<FuncCall/>}></Route>
          <Route path='/usestatedemo1' element = {<UseStateDemo1/>}></Route>
          <Route path='/usestatedemo2' element = {<UseStateDemo2/>}></Route>
      </Routes>
    </div>
  )
}

export default App
