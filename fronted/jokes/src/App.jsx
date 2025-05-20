import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data);
      })
      .catch((e) => {
        console.log('Error occurred in the code:', e);
      });
  }, []); // ✅ added empty array to run only once

  return (
    <>
      <h1>Hello main ne vite se app bna li hai</h1>
      <p>Total Jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  );
}

export default App;
