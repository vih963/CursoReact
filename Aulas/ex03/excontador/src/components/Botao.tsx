//serve para comentarios 


import { useState } from "react";
import { MyComponent } from "./MyComponentes";
export function Botao (){
    const [count, setCount] = useState(0)
    return(
        
        <>
        <button onClick={() => setCount((count) => count +1)}>
            Conte {count}
            
        </button>
        <MyComponent />
        </>

    )

}