import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import styled from 'styled-components'

import logo from './logo.svg'
import './App.css'

const Frame = styled.div`
  font-size: 18px;
`

function App() {
  return (
    <Frame>
      <Router>
        <Switch>
          <Route
            path="/test"
            render={() => (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    <q>Hello Indicio!</q>
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
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/test">Test</Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
          <Route
            path="/"
            render={() => (
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
                <div>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/test">Test</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          />
        </Switch>
      </Router>
    </Frame>
  )
}

export default App
