export function Events () {

function handleMyEvent(e){
    console.log(e)
    console.log("Ativou o Evento")
}
const renderZar = (a) => {
    if (a){
return <h1>Reinderizando isso</h1>
    }else {
return <h1>isso tbm é Reinderizar</h1>
    }
}
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}> CLique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("CLicou tbm  viado")}>Clique aqui tambem</button>
            </div>
            <div>
                <button onClick={() =>{
                    if(true){
                        console.log(" isso não deveria estar aqui")
                    }
                } }>Clique por favor</button>
            </div>
            <div>
                {renderZar(true)}
                {renderZar(false)}
            </div>
        </div>
    )
}