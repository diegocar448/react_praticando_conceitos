function Events() {

    const handleMyEvent = (e) => {
        console.log(e)
        console.log("Ativou o evento")
    }

    const renderSomething = (x) =>{
        if (x) {
            return <h1>Renderizando isso!</h1>;
        }else{
            return <h1>Tbm posso renderizar isso!</h1>;
        }
    };

  return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique</button>
            <button onClick={ () => console.log("Clicou!") }>Clique aqui também</button>
            <button onClick={ () => {
                if(true){
                    console.log("Isso não deveria existir =)")
                }
            }}>Clique Novamente</button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events