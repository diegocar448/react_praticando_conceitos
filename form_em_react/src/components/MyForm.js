import './MyForm.css';

import {useState} from 'react';

const MyForm = ({user}) => {
    // 6 controlled inputs
    // 3 gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [bio, setBio] = useState(user ? user.bio : '');
    const [role, setRole] = useState(user ? user.role : '');

    const handleName = (e) => {
        console.log(e.target.value)
    }

    console.log(name);
    console.log(email);
    console.log(bio);
    console.log(role);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email, bio, role);

        //validação
        //login

        /* 7 limpar Form */
        setName("");
        setEmail("");
        setBio("");
    };


    return (
    <div>
        {/* 5 Envio de form */}
        {/* 1 criacao de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu name" value={name} /*onChange={handleName}*/ onChange={ (e) => setName(e.target.value) } />
            </div>            
            {/* 2 label envolvendo input */}
            <label>                
                <span>E-mail</span>
                {/* 4 simplificação de manipulação de state */}
                <input type="email" name="email" placeholder="Digite o seu email" value={email} onChange={ (e) => setEmail(e.target.value) }/>
            </label>
            {/* 8 textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder='Descrição do usuário' onChange={ (e) => setBio(e.target.value) } value={bio}></textarea> 
            </label>
            {/* 9 select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
    )
}

export default MyForm