

import { Section } from './components/Section'
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'


const baseAvatar = "https://randomuser.me/api/portraits/women/"

const initialUsers = [
  { id: 1, name: "Laura", lastName: "Martínez", avatar: `${baseAvatar}/1.jpg`, active: true },
  { id: 2, name: "Andrea", lastName: "Pérez", avatar: `${baseAvatar}/2.jpg`, active: false },
  { id: 3, name: "Sofía", lastName: "Gómez", avatar: `${baseAvatar}/3.jpg`, active: true },
  { id: 4, name: "Camila", lastName: "Rodríguez", avatar: `${baseAvatar}/4.jpg`, active: false },
  { id: 5, name: "Mariana", lastName: "López", avatar: `${baseAvatar}/5.jpg`, active: true },
  { id: 6, name: "Daniela", lastName: "Ramírez", avatar: `${baseAvatar}/6.jpg`, active: true },
  { id: 7, name: "Fernanda", lastName: "Torres", avatar: `${baseAvatar}/7.jpg`, active: false },
  { id: 8, name: "Paula", lastName: "Jiménez", avatar: `${baseAvatar}/8.jpg`, active: true },
];

const UserCard = ({ avatar, name, lastName, active }) => {


  return (
    <article>
      <h2>{name} {lastName}</h2>
      <img src={avatar} alt={`${name}-user`} />
      <p>{active ? "activo " : "inactivo"}</p>
    </article>
  )

}


function App() {

  const [users, setUsers] = useState([])
  const [clear, setClean] = useState(false)

  useEffect(() => {
    // Código que quieres ejecutar como efecto secundario
    console.log('Efecto ejecutado');
    setUsers(initialUsers)


  },[clear]);


  const handleActive = () => {
    const actives = users.filter(user => user.active)
    setUsers(actives)


  }
  const handleInactive = () => {
    const inactives = users.filter(user => !user.active)
    setUsers(inactives)


  }
  const handleClear = () => {
    console.log("aqui")
    setClean(!clear)
    


  }


  return (
    <>

      {users.map(({ name, lastName, active, avatar, id }) => (
        <UserCard name={name} lastName={lastName} active={active} avatar={avatar} key={id} />

      ))
      }

      <button onClick={handleActive}>activos</button>
      <button onClick={handleInactive}>inactivos</button>
      <button onClick={handleClear}>limpiar</button>
    </>


  )
}

export default App
