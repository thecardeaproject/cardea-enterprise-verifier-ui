import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import AppHeader from '../UI/AppHeader'
import { Switch, Route, Redirect } from 'react-router-dom'
import styled from 'styled-components'

import Contact from '../UI/Contact'
import Contacts from '../UI/Contacts'
import Credential from '../UI/Credential'
import Credentials from '../UI/Credentials'
import Home from '../UI/Home'
import User from '../UI/User'
import Users from '../UI/Users'
import Settings from '../UI/Settings'

const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`
const Main = styled.main`
  flex: 9;
  padding: 30px;
`

function AdminRoutes(props) {
  const { path } = useRouteMatch()

  const loggedInUserState = props.loggedInUserState
  const rules = props.rules
  const check = props.check
  const schemas = props.schemas

  return (
    <>
      <Switch>
        <Route exact path={`${path}/forgot-password`}>
          <Redirect to="/admin" />
        </Route>
        <Route exact path={`${path}/password-reset`}>
          <Redirect to="/admin" />
        </Route>
        <Route exact path={`${path}/account-setup`}>
          <Redirect to="/admin" />
        </Route>
        <Route exact path={`${path}/login`}>
          <Redirect to="/admin" />
        </Route>
        <Route
          path="/admin"
          exact
          render={({ match, history }) => {
            return (
              <Frame id="app-frame">
                <AppHeader
                  loggedInUserState={props.loggedInUserState}
                  logo={props.image}
                  organizationName={props.organizationName}
                  loggedInUsername={props.loggedInUsername}
                  match={match}
                  history={history}
                  handleLogout={props.handleLogout}
                />
                <Main>
                  <Home
                    loggedInUserState={props.loggedInUserState}
                    sendRequest={props.sendMessage}
                    QRCodeURL={props.QRCodeURL}
                  />
                </Main>
              </Frame>
            )
          }}
        />
        <Route
          path={`${path}/invitations`}
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'invitations:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <p>Invitations</p>
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        <Route
          path={`${path}/contacts`}
          exact
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'contacts:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <Contacts
                      loggedInUserState={props.loggedInUserState}
                      history={history}
                      sendRequest={props.sendMessage}
                      contacts={props.contacts}
                      QRCodeURL={props.QRCodeURL}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        <Route
          path={`${path}/contacts/:contactId`}
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'contacts:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <Contact
                      loggedInUserState={props.loggedInUserState}
                      history={history}
                      sendRequest={props.sendMessage}
                      contactId={match.params.contactId}
                      contacts={props.contacts}
                      credentials={props.credentials}
                      schemas={schemas}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        <Route
          path={`${path}/credentials`}
          exact
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'credentials:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <Credentials
                      history={history}
                      credentials={props.credentials}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        <Route
          path={`${path}/credentials/:credentialId`}
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'credentials:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                  />
                  <Main>
                    <Credential
                      history={history}
                      credential={match.params.credentialId}
                      credentials={props.credentials}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
          credentials={props.credentials}
        />
        <Route
          path={`${path}/verification`}
          render={({ match, history }) => {
            return (
              <Frame id="app-frame">
                <AppHeader
                  loggedInUserState={props.loggedInUserState}
                  loggedInUsername={props.loggedInUsername}
                  logo={props.image}
                  organizationName={props.organizationName}
                  match={match}
                  history={history}
                  handleLogout={props.handleLogout}
                />
                <Main>
                  <p>Verification</p>
                </Main>
              </Frame>
            )
          }}
        />
        <Route
          path={`${path}/messages`}
          render={({ match, history }) => {
            return (
              <Frame id="app-frame">
                <AppHeader
                  loggedInUserState={props.loggedInUserState}
                  loggedInUsername={props.loggedInUsername}
                  logo={props.image}
                  organizationName={props.organizationName}
                  match={match}
                  history={history}
                  handleLogout={props.handleLogout}
                />
                <Main>
                  <p>Messages</p>
                </Main>
              </Frame>
            )
          }}
        />
        <Route
          path={`${path}/users`}
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'users:read')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <Users
                      loggedInUserState={props.loggedInUserState}
                      roles={props.roles}
                      users={props.users}
                      user={props.user}
                      successMessage={props.successMessage}
                      errorMessage={props.errorMessage}
                      clearResponseState={props.clearResponseState}
                      sendRequest={props.sendMessage}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        <Route
          path={`${path}/users/:userId`}
          render={({ match, history }) => {
            return (
              <Frame id="app-frame">
                <AppHeader
                  loggedInUserState={props.loggedInUserState}
                  loggedInUsername={props.loggedInUsername}
                  logo={props.image}
                  organizationName={props.organizationName}
                  match={match}
                />
                <Main>
                  <User
                    logo={props.image}
                    organizationName={props.organizationName}
                    history={history}
                  />
                </Main>
              </Frame>
            )
          }}
        />
        <Route
          path={`${path}/settings`}
          render={({ match, history }) => {
            if (check(rules, loggedInUserState, 'settings:update')) {
              return (
                <Frame id="app-frame">
                  <AppHeader
                    loggedInUserState={props.loggedInUserState}
                    loggedInUsername={props.loggedInUsername}
                    logo={props.image}
                    organizationName={props.organizationName}
                    match={match}
                    history={history}
                    handleLogout={props.handleLogout}
                  />
                  <Main>
                    <Settings
                      updateTheme={props.updateTheme}
                      saveTheme={props.saveTheme}
                      undoStyle={props.undoStyle}
                      errorMessage={props.errorMessage}
                      successMessage={props.successMessage}
                      clearResponseState={props.clearResponseState}
                      imageResponse={props.image}
                      stylesArray={props.stylesArray}
                      addStylesToArray={props.addStylesToArray}
                      removeStylesFromArray={props.removeStylesFromArray}
                      sendRequest={props.sendMessage}
                    />
                  </Main>
                </Frame>
              )
            } else {
              return <Route render={() => <Redirect to="/" />} />
            }
          }}
        />
        {/* Redirect to root if no route match is found */}
        <Route render={() => <Redirect to="/admin" />} />
      </Switch>
    </>
  )
}

export default AdminRoutes
