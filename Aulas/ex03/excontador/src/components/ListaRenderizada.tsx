import { useState } from "react"

const ListaRenderizada = () => {
    const [list] = useState(["vini", "maria","joão"]);
  return <div>
        <ul>
            {list.map((item)=> (
                <li>{item}</li>
            ))}
        </ul>
    </div>
  
};

export default ListaRenderizada