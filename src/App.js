import React, { useState, useEffect } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hellooow!</h1>
//     </div>
//   );
// }

const App = () => {
  const [cat, setCat] = useState('');
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    getCat();
  }, []);

  const getCat = () => {
    setDone(undefined);
    setTimeout(() => {
      fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(data => {
          setCat(data.file); //data.file -> traz imagem de gatos
          setDone(true);
        });

    }, 1200);
  }

    return (
    <div className="App">
      <h2>Random Cat Image Generator!</h2>
      <button onClick={getCat}>Get Cat</button>
      <div className="cat-pic">
        {!done ? (
          <p>Loading...</p>
        ) : (
          <img src={cat} alt="cat"/>
        )}
      </div>
    </div>
  );

}

export default App;
