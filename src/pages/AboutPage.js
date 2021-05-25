import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const AboutPage = () => {
  return (
    <Main>
      <Header
        title='OM'
        backLink='TILLBAKA'
        backLinkRoute='/'
        linkOne='HANTVERK'
        linkOneRoute='/collage'
        linkTwo='UTSTÄLLNINGAR'
        linkTwoRoute='/events'
        linkThree='ANSLAGSTAVLA'
        linkThreeRoute='/bulletin'
      />
    </Main>
  )
}

export default AboutPage

const Main = styled.main`
  background-color: #BC0A1E;
  height: 100vh;
`