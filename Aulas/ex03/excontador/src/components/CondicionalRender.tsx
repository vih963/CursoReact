import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false)

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p> se X for true, sim</p>}
        {!x && <p> se X for false, aparece esse </p>}
    </div>
  )
}

export default CondicionalRender