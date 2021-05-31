import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components/macro'

import Header from '../components/Header'
import NavBar from '../components/NavBar'

const AboutPage = () => {
  return (
    <Main>
      <Header
        title='OM'
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

export default AboutPage

const Main = styled.main`
  background-color: #ebe2ab;
  height: 100vh;
`