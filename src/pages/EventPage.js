import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'
import NavBar from '../components/NavBar'

const EventPage = () => {
  return (
    <Main>
      <Header
        title='EVENTS'
      />
      <NavBar
        collage='HANTVERK'
        about='OM'
        events='EVENTS'
        bulletin='ANSLAGSTAVLA'
      />
    </Main>
  )
}

export default EventPage

const Main = styled.main`
  background-color: #70731B;
  height: 100vh;
`