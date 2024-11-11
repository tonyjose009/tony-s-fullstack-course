
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Header = () => {
    return (
        <h1>{course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.courseName} {props.exerciseCount}</p>
    )
}

const Content = () => {
    return (
        <div>
            <Part courseName = {part1} exerciseCount = {exercises1} />
            <Part courseName = {part2} exerciseCount = {exercises2} />
            <Part courseName = {part3} exerciseCount = {exercises3} />

        </div>
    )
}

const Total = () => {
    return (
        <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    )
}




const App = () =>    {
    return (
        <div>
           <Header />
            <Content />
            <Total />
        </div>
    )
}

export default App
