/*
Copyright 2020 by Indicio Tech.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path='/test'
          render={() => (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  <q>Hello Test!</q>
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
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/test">Test</Link></li>
                </ul>
              </div>
            </div>
          )
        } />
        <Route
          path='/'
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
                  <li><a href="/">Home</a></li>
                  <li><a href="/test">Test</a></li>
                </ul>
              </div>
            </div>
          )
        } />
      </Switch>
    </Router>
  );
}

export default App;
