import React/* , { useState } */ from 'react'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import BackButton from '../components/UI/BackButton'

const AboutPage = () => {
  return (
    <Main>
      <Header
        title='OM'
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

export default AboutPage

const Main = styled.main`
  background-color: #ebe2ab;
  height: 100vh;
`
