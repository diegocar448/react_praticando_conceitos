import React from 'react'

const UserDetails = ({UserId, UserNome, UserEmail, UserCNH, UserIdade, UserMaioridade}) => {
  return (
    <div>
        <p>{UserNome} - {UserEmail} - {UserCNH} - {UserIdade} - {UserMaioridade}</p>
        <h3>
            { UserMaioridade === 1 ? "Maior de Idade" : "Menor de Idade" }
            { UserMaioridade === 1 ? ( <p>Maior de Idade</p>) : ( <p>Menor de Idade</p>) }
        </h3>
    </div>
  )
}

export default UserDetails