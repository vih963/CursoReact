
const Challenge2 = () => {

    const a = 10
    const b = 20
  return (
    <div>
        <p>A: {a}</p>
        <p>B: {b}</p>
        <button onClick={() => console.log(a + b)}>Clique para somar os valores</button>
    </div>
  )
}

export default Challenge2