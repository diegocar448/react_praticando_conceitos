import { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Aline", "Michele", "Isabela", "Diego", "Matheus"]);
    const [users, setUsers] = useState([
        {id:1, name: "Matheus", age: 31},
        {id:2, name: "Diego", age: 37},
        {id:3, name: "Sergio", age: 45},
        
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);
        
        setUsers( (prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
    
    return (
    <div>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
        <ul>
            { users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
    )
}

export default ListRender