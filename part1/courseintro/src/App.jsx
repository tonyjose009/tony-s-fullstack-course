import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = (props) => {
  return (
    <div>
      <p>
          Question: Hey {props.name} how old you ? <br />
          Answer: I'm {props.age} years old.
      </p>
    </div>
  )
}

export default App
