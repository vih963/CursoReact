import './App.css'
import { Botao } from './components/Botao'
import { MyComponent } from './components/MyComponentes'
import { SegundoComponent } from './components/SegundoComponent'
import { Events } from './components/Event'
import Challenge2 from './components/Challenge2'
import  HooksEmUso from './components/HooksEmUso' 
import ListaRenderizada from './components/ListaRenderizada'
import CondicionalRender from './components/CondicionalRender'



function App() {
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
      
    </div>
    
  )
}

export default App
