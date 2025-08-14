
import ManageData from './components/ManageData'
import './App.css'
import Condicional from "./components/Condicional"
import CarDetails from "./components/CarDetails"


function App() {

  return (
    <>
      <h1>Avançando em React</h1>
      {/*imagem na pasta public*/}
      <div>
        <img src="/cid-p.jpg" alt="Paisagem" />
        {/*imagem na pasta assets*/}
        <div>

        </div>
      </div>
      <ManageData />

      <Condicional />

      <CarDetails brand="Vw" km={100000} color="Azul" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={false} />
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={true} />
    </>
  )
}

export default App
