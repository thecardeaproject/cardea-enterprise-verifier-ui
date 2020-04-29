import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <q>Hello World!</q>
        </p>
        <a
          className="App-link"
          href="https://indicio.tech"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More About Indicio.tech
        </a>
      </header>
    </div>
  );
}

export default App;
