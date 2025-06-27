import "./App.css";
import FirstComponent from "./Components/FirsComponent";
import { MeuComponent } from "./Components/MeuComponent";

function App() {
  return (
    <>
      <div>
        <h1>Exercicios de components</h1>
        <h2>olha ele aqui </h2>
        <ul>
          <li>
            <FirstComponent/>
          </li>
          <div>
            <h1>outro componente</h1>
            <MeuComponent/>
          </div>
        </ul>
      </div>
    </>
  );
}

export default App;
