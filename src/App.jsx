import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/nav.jsx'
import Footer from './components/footer.jsx'
import {Routes, Route} from 'react-router-dom'
import About from "./pages/about.jsx"
import Home from "./pages/home.jsx"
import Projects from "./pages/projects.jsx"

function App() {


  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/projects"element={<Projects/>}/>
      </Routes>
      <Footer/>
    </div>
      

    
  )
}

export default App
