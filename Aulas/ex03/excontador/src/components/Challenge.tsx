export function Challenge () {

   function soma (){  
    console.log(n1+n2)
   }
      var n1 = 5
   var n2 = 5
   const total= n1+n2

   if(n1 ==5){
    console.log (total)
            }else {
                console.log(total)
            }
   }


    return (
        <div>
            <h1>aqui é o Rescultado da soma entre A e B</h1>            
       <h1>{5 + 5}</h1>

       <div>
        <button className="btn" onClick={soma(n1+n2)}> CLIQUE aqui</button>
        
       </div>
       </div>
    )
}