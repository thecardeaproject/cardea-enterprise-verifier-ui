import React from 'react'

import { useContext } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styled from 'styled-components'
import { ThemeContext, ThemeProvider } from 'styled-components'

import AppHeader from './UI/AppHeader.js'

//import theme from './theme.js'
import './App.css'

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
const Main = styled.main`
  flex: 9;
  padding: 30px;
`

function App(theme) {
  const themeContext = useContext(ThemeContext)

  console.log('Current theme: ', themeContext)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Home</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/settings"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Settings</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/contacts"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Contacts</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/contacts/invitations"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Invitations</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/credentials"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Credentials</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/verification"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Verification</p>
                  </Main>
                </Frame>
              )
            }}
          />
          <Route
            path="/messages"
            render={({ match }) => {
              return (
                <Frame id="app-frame">
                  <AppHeader match={match} />
                  <Main>
                    <p>Messages</p>
                  </Main>
                </Frame>
              )
            }}
          />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
