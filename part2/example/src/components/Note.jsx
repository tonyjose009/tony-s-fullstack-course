const Note = (props) => {
    return (
        <li key={props.index}>{props.note}</li>
    )
}
export default Note