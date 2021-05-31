import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'
import BackButton from '../components/UI/BackButton'
import NavBar from '../components/NavBar'

const EventPage = () => {
  return (
    <Main>
      <Header
        title='EVENTS'
      >
        <BackButton />
      </Header>
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
  background-color: #ebe2ab;
  height: 100vh;
`