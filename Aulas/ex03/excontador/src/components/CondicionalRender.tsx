import { useState } from "react"

const CondicionalRender = () => {
  const [x] = useState(false)

  const [name, setName] = useState("Vinicius")

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p> se X for true, sim</p>}
      {!x && <p> se X for false, aparece esse </p>}
      <h1>IF ternario</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
      <button onClick={() => setName("João")}> Clique aqui</button>
    </div>
  )
}

export default CondicionalRender