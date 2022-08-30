//CSS
import './App.css';

//React
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words';


//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

const guessesQty = 3;

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState(guessesQty);
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(50);

  const pickWordAndCategory = useCallback(() => {
    //pick random category
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];    

    //pick random word
    const word = words[category][Math.floor(Math.random() * words[category].length)];   
    

    return {word, category};
  }); 

  //starts secretword
  const startGame = useCallback(() => {
	//clear all letters
	clearLetterStates();

    // pick word and pick category
    const {word, category} = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.toLowerCase();   
    console.log(word, category);
    console.log(wordLetters);

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters.split(""));

    setGameStage(stages[1].name);
  }, [ pickWordAndCategory ]);

  // process the letter input
  const verifyLetter = (letter) => {    
    const normalizedLetter = letter.toLowerCase();

    
	//const normalizedLetter = letter.toLowerCase();

	//console.log(normalizedLetter);

	//verifica se ja foi usada
	if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {          
		return;
	}    

	//colocar letrad certa ou remove uma tentativa
	if (letters.includes(normalizedLetter)) {        
		setGuessedLetters((actualGuessedLetters) => [		
		//pegar e adicionar a nova letra
		...actualGuessedLetters,
		normalizedLetter		
		]);
	}else{
		setWrongLetters((actualWrongLetters) => [
		//pegar e adicionar a nova letra
		...actualWrongLetters,
		normalizedLetter
		]);

		//subtrai tentativa
		setGuesses((ActualGuesses) => ActualGuesses - 1 )
	}
  };

  const clearLetterStates = () => {
	setGuessedLetters([]);
	setWrongLetters([]);

  }
  
  //vai executar a cada vez que esse dado for alterado
  useEffect(() => {
	//resetar todos os states
	if(guesses <= 0){
		clearLetterStates();

		setGameStage(stages[2].name)
	}

  }, [guesses]);

  //checar condição da vitória
  useEffect(() => {
	//um array de letras unicas
	const uniqueLetters = [... new Set(letters)];

	//condição de vitoria
	if (guessedLetters.length === uniqueLetters.length) {
		//add score
		setScore((actualScore) => actualScore += 100)

		//restart game with new word
		startGame();
	}

	console.log(uniqueLetters);

  }, [guessedLetters, letters, startGame]);

  // console.log(guessedLetters);
  // console.log(wrongLetters);

  // restarts the game
  const retry = (() => {
	setScore(0);
	setGuesses(guessesQty);

    setGameStage(stages[0].name);
  });


  return (
    <div className="App">
      { gameStage === 'start' &&  <StartScreen startGame={startGame} />}
      { gameStage === 'game' &&  (<Game 
                                    verifyLetter={verifyLetter}
                                    pickedWord={pickedWord}
                                    pickedCategory={pickedCategory}
                                    letters={letters}
                                    guessedLetters={guessedLetters}
                                    wrongLetters={wrongLetters}
                                    guesses={guesses}
                                    score={score}
                                  />)}
      { gameStage === 'end' &&  <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
