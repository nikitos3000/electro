import React from 'react'
import { Link } from 'react-router-dom'

function Home({ users }) {
  React.useEffect(() => {
    console.log(users)
  }, [users])

  console.log(users)

  const openNewWindow = () => {
    window.myAPI.openNewTable()
  }
  return (
    <div>
      <h1>Пользователи</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to={'/new-window'}>
        <button onClick={() => {}}>Добавить пользователя</button>
      </Link>
    </div>
  )
}

export default Home
