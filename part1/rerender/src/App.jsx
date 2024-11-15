import {useState} from "react";

const App = ()  => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => setCounter(counter + 1)
    const decreaseCounter = () => setCounter(counter - 1)
    const resetCounter = () => setCounter(0);
    console.log('rendering...', counter)
    return (
        <div>
        <div className="App">Counter {counter}</div>
            <button onClick={increaseCounter}>Increase </button>
            <button onClick={decreaseCounter}>Decrease </button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}

export default App;