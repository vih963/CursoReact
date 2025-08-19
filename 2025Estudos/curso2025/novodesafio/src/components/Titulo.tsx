function Titulo() {

    const soma = 10 + 10
    const nome = "Vinicius Camargo"
    const urlImg = "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"

    return (
        <div>
            <h1>Ola eu sou um Titulo {soma} </h1>
            <h1>Ola eu sou o {nome}</h1>
            <img width={100} src={urlImg} />
        </div>
    )
}

export default Titulo