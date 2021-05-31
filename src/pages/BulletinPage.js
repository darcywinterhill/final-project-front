import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom'*/
import styled from 'styled-components'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import BackButton from '../components/UI/BackButton'
/* import Messages from '../components/bulletin/Messages' */

const BulletinPage = () => {

  return (
    <Main>
      <Header
        title='ANSLAGSTAVLA'
      >
        <BackButton />
      </Header>
      <NavBar
        collage='HANTVERK'
        about='OM'
        events='EVENTS'
        bulletin='ANSLAGSTAVLA'
      />
{/*       <Messages /> */}
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  background-color: #ebe2ab;
  height: 100vh;
`