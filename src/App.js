import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

import FrontPage from './pages/FrontPage'
import CollagePage from './pages/CollagePage'
import CraftPage from './pages/CraftPage'
import AboutPage from './pages/AboutPage'
import EventPage from './pages/EventPage'
import BulletinPage from './pages/BulletinPage'

import messages from './reducers/messages'

import headerimg from './assets/fabric-mobile.jpg'

const reducer = combineReducers({
  messages: messages.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Main>
          <Route path='/' exact component={FrontPage}/>
          <Route path='/collage' component={CollagePage}/>
          <Route path='/collage/:craft' component={CraftPage} />
          <Route path='/about' component={AboutPage}/>
          <Route path='/events' component={EventPage}/>
          <Route path='/bulletin' component={BulletinPage}/>
          </Main>
        </Switch>
      </Provider>
    </BrowserRouter>
  )
}

const Main = styled.main`
  background-image: url(${headerimg});
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`
