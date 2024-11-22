import {useState} from "react";
const App = () => {
    const [value, setValue] = useState(0)

    const setToValue = (newValue) => {
        console.log('newValue=', newValue)
        setValue(newValue);
    }

    const Display = ({value}) => {
        return (
            <p>{value}</p>
        )
    }


    const Button = ({onClickHandler, text}) => {
        return (
            <button onClick={onClickHandler}> {text}</button>
        )
    }



    return (
        <div>
            <Display value={value} />
            <Button onClickHandler={ () => {setValue(value-1)}} text={'Decrement'}></Button>
            <Button onClickHandler={ () => {setValue(1000)}} text={'Thousand'}></Button>
            <Button onClickHandler={ () => {setValue(0)}} text={'Reset'}></Button>
            <Button onClickHandler={ () => {setValue(value+1)}} text={'Increment'}></Button>
        </div>
    )
}
export default App
