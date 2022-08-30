import './App.css';
import { useState } from 'react';
import City from './assets/city.jpg';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
	//const name = "Joaquim";
	const [userName] = useState("Maria");

	const cars = [
		{id: 1, brand: "Dodge", color: "Preta", newCar: true, km:0},
		{id: 2, brand: "Toyota", color: "Azul", newCar: false, km:1000},
		{id: 3, brand: "Kia", color: "Cinza", newCar: false, km:100000},
		{id: 4, brand: "Renaut", color: "Vinho", newCar: true, km:0}
	];

	function showMessage(){
		console.log("Evento do componente pai");
	}

	const [message, setMessage] = useState("");

	const handleMessage = (msg) => {
		setMessage(msg);
	};  

	const users = [
		{UserId: 1, UserNome: "Diego", UserEmail: "teste1@email.com", UserCNH: 10, UserIdade:37, UserMaioridade:1},
		{UserId: 2, UserNome: "Matheus", UserEmail: "teste2@email.com", UserCNH: 20, UserIdade:29, UserMaioridade:1},
		{UserId: 3, UserNome: "George", UserEmail: "teste3@email.com", UserCNH: 30, UserIdade: 16, UserMaioridade:0},
		{UserId: 4, UserNome: "Juliana", UserEmail: "teste4@email.com", UserCNH: 40, UserIdade:25, UserMaioridade:1}
	];

	return (
		<div className="App">
			<h1>Avançando em React</h1>
			{/* Imagem em /public */}
			<div>
				<img src="/img1.jpg" alt="Paisagem" />
			</div>
			{/* Imagem em /assets */}
			<div>
				<img src={City} alt="Cidade"/>
			</div>
			<ManageData/>
			<ListRender/>
			<ConditionalRender/>
			{/* props */}
			<ShowUserName name={userName} />
			{/* destructuring */}
			<CarDetails brand="VW" km={100000} color="Azul" newCar={false} />
			{/* reaproveitando */}
			<CarDetails brand="Ford" km={10000} color="Vermelha" newCar={true} />
			<CarDetails brand="Fiat" km={22000} color="Preto" newCar={false} />
			{/* loop em array de objetos */}
			{cars.map((car) => (
				<CarDetails key={car.id}  brand={car.brand} color={car.color} km={car.km} newCar={car.newCar}/>
			))}

			{/* fragment */}	
			<Fragment propFragment="teste"/>
			{/* children */}
			<Container myValue="testing">
				<p>E este é o conteúdo</p>
			</Container>
			<Container myValue="testing 2">
				<p>Testando o container</p>
			</Container>
			{/* executar função */}
			<ExecuteFunction myFunction={showMessage}/>
			{/* state lift */}
			<Message msg={message} />
			<ChangeMessageState handleMessage={handleMessage}/>

			{
				users.map((user) => (
					<UserDetails key={user.UserId} 
							UserNome={user.UserNome} 
							UserEmail={user.UserEmail} 
							UserCNH={user.UserCNH} 
							UserIdade={user.UserIdade} 
							UserMaioridade={user.UserMaioridade} 
					/>
				))
			}
			
		</div>
	);
}

export default App;
