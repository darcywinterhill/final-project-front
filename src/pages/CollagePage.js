import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'
import NavBar from '../components/NavBar'

const CollagePage = () => {
  return (
    <Main>
      <Header
        title='HANTVERK'
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

export default CollagePage

const Main = styled.main`
  background-color: #E70410;
  height: 100vh;
`