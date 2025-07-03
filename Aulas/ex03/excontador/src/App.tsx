import './App.css'
import { Botao } from './components/Botao'
import { MyComponent } from './components/MyComponentes'
import { SegundoComponent } from './components/SegundoComponent'
import { Events } from './components/Event'
import { Challenge } from './components/Challenge'



function App() {
    return (
    <div>
      <h1>Aqui vai ser o contador</h1>
    <Botao />
    <SegundoComponent />
    <MyComponent />
    <Events />
    <Challenge />
    <div>
      
    </div>
    </div>
  )
}

export default App
