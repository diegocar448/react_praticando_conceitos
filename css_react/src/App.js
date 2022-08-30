import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyComponent';

import {useState} from "react";
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState("Matheus");

  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Esse parágrafo e do App.js</p>
      {/* inline CSS */}
      <p style={{ color:"blue", padding: "25px", borderTop:"2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color:"blue", padding: "25px", borderTop:"2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? ({color:"purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color:"purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={
        name === "Matheus" 
        ? ({color:"green", backgroundColor: "#000"}) 
        : null
        }
      >Teste Nome</h2>
      {/* class dinâmica */}
      <h2 className={ redTitle ? "red-title" : "title" }>Este título vai ter classe dinâmica</h2>
      {/* CSS Modules */}
      <Title/>
      <h2>Testando</h2>
    </div>
  );
}

export default App;
