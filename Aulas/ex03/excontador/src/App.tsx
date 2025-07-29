import './App.css'
import { Botao } from './components/Botao'
import { MyComponent } from './components/MyComponentes'
import { SegundoComponent } from './components/SegundoComponent'
import { Events } from './components/Event'
import Challenge2 from './components/Challenge2'
import HooksEmUso from './components/HooksEmUso'
import ListaRenderizada from './components/ListaRenderizada'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react'



function App() {

  const name = "Joaquim";
  const [userName] = useState("Maria")

  return (
    <div>
      <h1>Aqui vai ser o contador</h1>
      <Botao />
      <SegundoComponent />
      <MyComponent />
      <Events />
      <Challenge2 />
      <HooksEmUso />
      <ListaRenderizada />
      <CondicionalRender />
      <ShowUserName name={userName} />

    </div>

  )
}

export default App
