import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const EventPage = () => {
  return (
    <Main>
      <Header
        title='UTSTÄLLNINGAR'
        backLink='TILLBAKA'
        backLinkRoute='/'
        linkOne='OM'
        linkOneRoute='/about'
        linkTwo='HANTVERK'
        linkTwoRoute='/collage'
        linkThree='ANSLAGSTAVLA'
        linkThreeRoute='/bulletin'
      />
    </Main>
  )
}

export default EventPage

const Main = styled.main`
  background-color: #70731B;
  height: 100vh;
`