import {useState} from "react";

const Button = ({onClickHandler, text}) => {
    return (
        <button onClick={onClickHandler}>{text}</button>
    )
}

const App = ()  =>{
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const Statistics = (props) => {
        let  total = good + neutral + bad, avg = 0 , positive =  0
        if(total !== 0) {
             avg = ((good * 1) + (bad * -1)) / (good + neutral + bad)
             positive = (good / total) * 100
        }

        if(props.type === 'total'){
            return total
        } else if (props.type === 'avg'){
            return  avg
        } else if (props.type === 'pos'){
            return positive
        }
    }

    return (
        <div>
            <h2>Give Feedback</h2>
            <Button onClickHandler={ () => {setGood(good+1)}} text="Good" />
            <Button onClickHandler={ () => {setNeutral(neutral+1)}} text="Neutral" />
            <Button onClickHandler={ () => {setBad(bad+1)}} text="Bad" />
            <h2>Statistics</h2>
            <p>Good = {good}</p>
            <p>Neutral = {neutral}</p>
            <p>Bad = {bad}</p>
            <p>All = {Statistics({type:'total'})}</p>
            <p>Average = {Statistics({type:'avg'})}</p>
            <p>Positive = {Statistics({type:'pos'})}</p>
        </div>
    )
}

export default App
