import { useState } from 'react'
import './App.css'
import { Section } from './components/Section'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './routes/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={Login}>
      </Routes>
    </BrowserRouter>

  )
}

export default App
