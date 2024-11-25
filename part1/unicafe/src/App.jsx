import {useState} from "react";

const Button = ({onClickHandler, text}) => {
    return (
        <button onClick={onClickHandler}>{text}</button>
    )
}

const StatisticLine = (props) => {
    return (
        <p>{props.label} = {props.value}</p>
    )
}

const Statistics = (props) => {
    let good = props.good, neutral = props.neutral, bad = props.bad
    let  total = good + neutral+ bad, avg = 0 , positive =  0
    if(total === 0){
        return  (
            <div>
                <h2>Statistics</h2>
                <p>No Feedback given</p>
            </div>
        )
    } else {
        if(total !== 0) {
            avg = ((good * 1) + (bad * -1)) / (good + neutral + bad)
            positive = (good / total) * 100
        }
        return (
            <div>
                <h2>Statistics</h2>
                <StatisticLine label="Good" value={good} />
                <StatisticLine label="Neutral" value={neutral} />
                <StatisticLine label="Bad" value={bad} />
                <StatisticLine label="All" value={total} />
                <StatisticLine label="Average" value={avg} />
                <StatisticLine label="Positive" value={positive} />
            </div>
        )
    }
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h2>Give Feedback</h2>
            <Button onClickHandler={ () => {setGood(good+1)}} text="Good" />
            <Button onClickHandler={ () => {setNeutral(neutral+1)}} text="Neutral" />
            <Button onClickHandler={ () => {setBad(bad+1)}} text="Bad" />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
