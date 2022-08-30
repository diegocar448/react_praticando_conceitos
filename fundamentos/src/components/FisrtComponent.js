import MyComponent from "./MyComponent";

const FirstComponent = () => {    

    return (
        <div>
            {/* comentario */}            
            <h1>Primeiro Componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent;