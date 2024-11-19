import {useState} from "react";

const Display = ({counter}) => { return (<div className="app">Counter={counter}</div>) }

const Button = ({onClickEventHandler, label}) => { return (<button onClick={onClickEventHandler}>{label}</button>)}



const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        console.log('Going to increase counter from ', counter);
        setCounter(counter + 1)
    }
    const decreaseCounter = () => {
        console.log('Going to decrease counter from ', counter);
        setCounter(counter - 1)
    }
    const resetCounter = () => {
        console.log('Going to reset counter from ', counter)
        setCounter(0)
    }
    console.log('rendering...', counter)
    return (
        <div>
            <Display counter={counter} />
            <Button onClickEventHandler={increaseCounter} label="Increase" />
            <Button onClickEventHandler={decreaseCounter} label="Decrease" />
            <Button onClickEventHandler={resetCounter} label="Reset" />
        </div>
    )
}

export default App;