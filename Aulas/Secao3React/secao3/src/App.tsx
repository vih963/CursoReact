
import setup from "./assets/setup.jpg"

function App() {  

  return (
   <div>
    <div>Avançando em React</div>
    <div>
      {/* Imagem dentro da pasta public */}
      <img src="/controle.jpg" alt="controle" />
    </div>
    <div>
      {/* Imagem dentro de assets */}
      <img src={setup} alt="setup" />

    </div>
   </div>
  )
}

export default App
