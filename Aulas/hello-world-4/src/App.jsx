import { useState } from 'react'
import './App.css'
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
          <h2>OLa mundo 2 </h2>
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

    <h2> teste hello</h2>
    </>
  )
}

export default App
