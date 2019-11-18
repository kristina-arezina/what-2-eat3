import React from 'react';
import './App.css';
import GoButton from "./components/Home/Button"
import OutlinedTextFields from "./components/Home/TypeBox.js";


function App() {
  return (
    <div className="App">
      <p>Hello from App.js</p>
        <OutlinedTextFields/>
        <GoButton/>
    </div>
  );
}

export default App;
