import Part from './Part'


const Content = ({parts}) => {
    let totalExercises = 0
    return (
        <div>
            {parts.map(part => {
                totalExercises += part.exercises
                    return <Part key={part.id} part={part}/>
                }
            )}
            Total: {parts.reduce((total, curr) =>  total + curr.exercises, 0)}

        </div>
    )
}
export default Content;