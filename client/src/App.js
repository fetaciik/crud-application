import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <input type="text" name="movieName"></input>
        <input type="text" name="review"></input>

        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
