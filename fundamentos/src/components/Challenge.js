function Challenge() {
    const numero1 = 2;
    const numero2 = 8;

    let somar = (e) => {
        console.log(numero1+numero2)        
        return numero1+numero2;
    }

  return (
    <div>
        <p>{numero1}</p>
        <p>{numero2}</p>
        <button onClick={somar}>Somar</button>        
    </div>
  )
}

export default Challenge