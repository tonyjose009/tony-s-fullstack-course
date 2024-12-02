import { useState } from 'react'

const App = (props) => {
    const { notes } = props

    return (
        <div>
            <h1>Notes</h1>
            <ul>
                {/*{notes.map( function(note, index) {*/}
                {/*    return <li key={index}>{note.content}</li>*/}
                {/*})}*/}
                {notes.map( (note) => {
                    return  <li key={note.id}>{note.content}</li>
                })}
            </ul>
        </div>
    )
}

export default App