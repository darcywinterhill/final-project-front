import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom'*/
import styled from 'styled-components'

import Header from '../components/Header'

const BulletinPage = () => {
  return (
    <Main>
      <Header
        title='ANSLAGSTAVLA'
        backLink='TILLBAKA'
        backLinkRoute='/'
        linkOne='OM'
        linkOneRoute='/about'
        linkTwo='HANTVERK'
        linkTwoRoute='/collage'
        linkThree='UTSTÄLLNINGAR'
        linkThreeRoute='/events'
      />
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  background-color: #D6C667;
  height: 100vh;
`