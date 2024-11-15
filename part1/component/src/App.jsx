
const Hello = ({name, age}) => {
    const bornYear = () =>  new Date().getFullYear() - age
    // above as function below
    // const bornYear = () => {
    //     return new Date().getFullYear() - age
    // }

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you're born in {bornYear()}</p>
        </div>
    )
}

const App = () =>  {
    const person = {
        name: 'Tony',
        age: 35
    }
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name={person.name} age={person.age}/>
        </div>
    )
}

export default App;