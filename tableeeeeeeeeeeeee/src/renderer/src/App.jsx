import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.jsx';
import Form from './components/Form.jsx';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([{"name":"Nikita1","age":19},{"name":"Nikita2","age":19},{"name":"Nikita3","age":19},{"name":"Nikita4","age":19}]);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home users={users} />} />
        <Route path="/new-window" element={<Form addUser={addUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
