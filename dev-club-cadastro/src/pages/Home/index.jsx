import './style.css'
import Trash from '../../assets/trash1.svg'

function Home() {

  const users = 
  
  return (
    <>

  <div className='container'>
    <form>
      <h1>Cadastro de Usuarios</h1>
      <input name="nome" type='text' />
      <input name='idade' type="number" />
      <input name='email' type="email" />
      <button type='button'>Cadastrar</button>
    </form>

    <div>
      <div>
        <p>Nome</p>
        <p>Idade</p>
        <p>Email</p>
      </div>
      <button>
        <img src={Trash} alt="" />
      </button>
    </div>
  </div>
  </>
  )
}

export default Home
