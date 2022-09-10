import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";

type User = {
  id: number;
  name: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch("http://127.0.0.1:3100/users");
    const data: User[] = await res.json();
    console.log(data);
    setUsers(data);
  };

  return (
    <div className="App">
      <Button variant="contained" onClick={fetchUsers}>
        Get All
      </Button>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h3>{user.name}</h3>
            <p>email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
