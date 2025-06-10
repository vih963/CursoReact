import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Section } from './components/Section'
import { Section2 } from './components/Sectio2'
import { Navbar } from './components/Navbar'
import { Site } from './components/Site'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={
        <>
        <div>
          <h1>Login</h1>
          </div>
          </>
      }>
        <Route path="/" element={
        <>
        <div>
          <h1>Home</h1>
          </div>
          </>
        }></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
