
const course = {
    'name': 'Half Stack application development',
    parts: [
        {
            'name': 'Fundamentals of React',
            'exercises': 10
        },
        {
            'name': 'Using props to pass data',
            'exercises': 7
        },
        {
            'name': 'State of a component',
            'exercises': 14
        }
    ]
}


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.course.name} {props.course.exercises}</p>
    )
}

const Content = (props) => {
    let total = 0;
    return (
        props.parts.map((item, index) => {
            total = total+item.exercises;
            return <Part key={index} course={item} total={total}/>
        })
    )
}

const Total = (props) => {
    let total = 0;
    props.parts.map((item) => {
        total = total+item.exercises;
    })
    return (
        <p>Number of exercises = {total}</p>
    )
}


const App = () =>    {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App
