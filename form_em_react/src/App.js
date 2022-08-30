import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
	return (
	<div className="App">
		<h2>Forms</h2>
		<MyForm user={{name: "Bruna", email: "bruna@gmail.com", bio: "Sou pq somo", role:"editor"}}/>
	</div>
	);
} 

export default App;
