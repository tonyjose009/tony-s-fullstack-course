import Part from './Part'


const Content = ({parts}) => {
    let total = 0
    return (
        <div>
            {parts.map(part => {
                    total += part.exercises
                    return <Part key={part.id} part={part}/>
                }
            )}
            <p>Total of {total}</p>
        </div>
    )
}
export default Content;