import { useState } from "react"

const ListaRenderizada = () => {
    const [list] = useState(["vini", "maria", "joão"]);

    const [users, setUsers] = useState([
        { id: 1, name: "matheus", age: 31 },
        { id: 2, name: "joao", age: 28 },
        { id: 3, name: "pedro", age: 44 },
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        console.log(prevUsers)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };
return  <div>
    <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
    </ul>
    <ul>
        {users.map((user) => (
            <li key={user.id}>
                {user.name} - {user.age}
            </li>
        ))}
    </ul>

    <button onClick={deleteRandom}>Delete randor user</button>
</div>

};

export default ListaRenderizada