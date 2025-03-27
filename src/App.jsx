
import { useState } from 'react'
import { Section } from './components/Section'
import './App.css'

function App() {
  const [state, setState] = useState(false)
  const name = state ? "Andres" : "pepito"




  const handeClick = () => {

    setState(!state)
  }

  return (
    <>
      <Section name={name} >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam tempora blanditiis, praesentium temporibus dolore necessitatibus consequatur commodi error, similique porro impedit magni maxime voluptatum pariatur! Aperiam ut nihil atque accusantium.</p>
        <button onClick={handeClick}>Cambiar nombre</button>
      </Section>

      <Section name="liz" lastName="Castillo" />


    </>


  )
}

export default App
