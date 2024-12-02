import { useState } from 'react'
import Note from './components/Note'

const App = ({notes}) => {
    return (
        <div>
            <h1>Notes</h1>
            <ul id="notes">
                {/*{notes.map( (note) => {*/}
                {/*    return  <li key={note.id}>{note.content}</li>*/}
                {/*})}*/}

                {notes.map((note) => <Note key={note.id} index={note.id} note={note.content} />)}
            </ul>
        </div>
    )
}

export default App