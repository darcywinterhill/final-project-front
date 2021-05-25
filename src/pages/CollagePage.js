import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const CollagePage = () => {
  return (
    <Main>
      <Header
        title='HANTVERK'
        backLink='TILLBAKA'
        backLinkRoute='/'
        linkOne='OM'
        linkOneRoute='/about'
        linkTwo='UTSTÄLLNINGAR'
        linkTwoRoute='/events'
        linkThree='ANSLAGSTAVLA'
        linkThreeRoute='/bulletin'
      />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  background-color: #E70410;
  height: 100vh;
`