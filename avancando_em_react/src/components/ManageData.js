import {useState} from 'react';

function ManageData() {
    const someData = 10;

    const [number, setNumber] = useState(10);

    console.log(someData);
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={ () => ( someData = 15 ) }>Mudar Variável</button>
        </div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={ () => setNumber(25) }>mudar o state</button>
        </div>
    </div>
  )
}

export default ManageData