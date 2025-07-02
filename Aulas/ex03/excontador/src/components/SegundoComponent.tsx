export function SegundoComponent () {
    const name = "Vinicius"
    const data = {
        age: 34,
        job: "Desenvolvedor",
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.job}</p>
            <p>e sua idade é {data.age} anos</p>
        </div>
    )
}