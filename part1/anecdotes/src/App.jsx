import { useState } from 'react'

const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
]
let anecs = []
anecdotes.map( anecdote => {
    var anec = {}
    anec['text'] = anecdote
    anec['votes'] = 0
    anecs.push(anec)
})


const MostVotedItem = (props) => {
    console.log(props);
    if(props.selectedIndex == -1){
        return (
            <div>
            <h2>Anecdote with most votes</h2>
            <p>No feedback given so far</p>
            </div>
        )
    }
    else {
        return (
            <div>
            <h2>Anecdote with most votes</h2>
            <p>{anecs[props.selectedIndex].text}</p>
                <p>has {anecs[props.selectedIndex].votes} votes</p>
            </div>
        )
    }
}

function App() {

    const [selected, setSelected] = useState(Math.floor(Math.random()*anecdotes.length) + 0)
    const [vote, setVote] = useState(0)
    console.log(anecs)

    var max = 0, selectedItemIndex = -1;
    anecs.map( (anec, index) => {
        if(anec['votes'] > max){
            max = anec['votes']
            selectedItemIndex = index
        }
    })
    console.log('max=', max)
    console.log('selectedItemIndex=', selectedItemIndex)


    // function randomClick(){
    //
    //     return random
    // }

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecs[selected].text}</p>
            {/*<p>{anecs[selected].votes}</p>*/}
            <div>
                <button onClick={ () => {
                    console.log('vote for ', selected)
                    anecs[selected].votes+= 1
                    setVote(anecs[selected].votes+1)
                    console.log('selected text is ', anecs[selected].text)
                    console.log("no of votes: ", anecs[selected].votes)
                }}>Vote</button>
                <button onClick={() => {
                    const random = (Math.floor(Math.random()*anecdotes.length) + 0)
                    setSelected(random)
                    setVote(anecs[selected].votes)
                }}>Next Anecdote
                </button>
                <p>has {anecs[selected].votes} votes</p>
                <hr />

                <MostVotedItem selectedIndex={selectedItemIndex} vote={max}/>
            </div>

        </div>
    )
}



export default App
