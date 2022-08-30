//components
import FirstComponent from './components/FisrtComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

//style css
import './App.css';
import Challenge from './components/Challenge';

function App() {
	return (
		<div className="App">
            <h1>Fundamentos React</h1>
            <FirstComponent />
            <TemplateExpressions/>
            <MyComponent/>
            <Events/>
            <Challenge/>
		</div>
	);
}

export default App;
