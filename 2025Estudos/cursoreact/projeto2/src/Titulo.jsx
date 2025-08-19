function Titulo() {
//   let nome = "Vinicius Camargo";
  const soma = 10 + 10;
  const urlImg ="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"

  return (
    <div>
      <h1>Oi eu sou um titulo {soma}</h1>
      <img width={100} src={urlImg}/>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis modi
        temporibus consequuntur quaerat culpa atque recusandae accusamus
        provident excepturi! Quia error sequi dolorem natus mollitia quasi
        accusantium repudiandae ducimus. Earum.
      </p>
    </div>
  );
}

export default Titulo;
