import { useState } from "react";

function HooksEmUso() {
  let someData = 10;

  console.log(someData)
 
  

  const [number, setNumber] = useState(15);
 console.log(number)
  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variavel</button>
      </div>
      <p>NOVO VALOR :{number}</p>
      <button onClick={() => setNumber(25)}>MUDAR O STATE</button>
    </div>
  );
}

export default HooksEmUso;
