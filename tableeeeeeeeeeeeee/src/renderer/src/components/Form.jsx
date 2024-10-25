import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Form({ addUser }) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = { name, age }
    addUser(newUser)
    setName('')
    setAge('')
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Имя:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Возраст:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <button type="submit">Добавить</button>
    </form>
  )
}

export default Form
