import { useEffect } from 'react';
import pokemon from './pokemon.js';
import './App.css';

function App() {
  useEffect(() => {
    // verify that the pokemon have been imported
    console.log({ pokemon });
  });

  function pokemonToComponent(pokemonData) {
    // ⭐⭐⭐ Put your code here ⭐⭐⭐
  }

  return (
    <main>
      <h1>Hello, Pokemon!</h1>
      <p>⭐⭐⭐ Put your code here ⭐⭐⭐</p>
    </main>
  );
}

export default App;
