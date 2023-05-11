import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  // Peticion usando FETCH.

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // Peticion con AXIOS.

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(URL)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Fetch Like a Pro</h1>
      <div className="card">
        <ul>
          {data?.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
