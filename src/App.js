import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import User from './components/Users/User';
import fakeData from './fakeData/MOCK_DATA.json';

function App() {
  const [users, setUsers] = useState([]);
  const [addUser, setUser] = useState([]);
  useEffect(() => {
    setUsers(fakeData);
  },[]);

  const handleAddUser = (user) => {
    const newUser = [...addUser, user];
    setUser(newUser);
  }

  return (
    <div className="App">
      <div className="main-container">
        <div className="user-collection">
          {
            fakeData.map(user => <User user={user} key={user.id} handleAddUser={handleAddUser}></User>)
          }
        </div>
        <div>
          <Cart fakeData={fakeData} addUser={addUser}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
