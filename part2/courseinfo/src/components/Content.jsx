import Part from './Part'


const Content = ({parts}) => {

    return (
        <div>
            {parts.map(part => {
                    return <Part key={part.id} part={part}/>
                }
            )}
            Total: {parts.reduce((total, curr) =>  total + curr.exercises, 0)}

        </div>
    )
}
export default Content;