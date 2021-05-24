import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import FrontPage from './pages/FrontPage'
import CollagePage from './pages/CollagePage'
import AboutPage from './pages/AboutPage'
import EventPage from './pages/EventPage'
import BulletinPage from './pages/BulletinPage'

export const App = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
        <Route path='/' exact component={FrontPage}/>
        <Route path='/collage' exact component={CollagePage}/>
        <Route path='/about' exact component={AboutPage}/>
        <Route path='/event' exact component={EventPage}/>
        <Route path='/bulletin' exact component={BulletinPage}/>
      {/* </Provider> */}
    </BrowserRouter>
  )
}
