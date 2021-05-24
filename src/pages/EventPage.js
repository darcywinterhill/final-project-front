import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const EventPage = ({ title }) => {
  return (
    <Main>
      <Header
      title='UTSTÄLLNINGAR'
      />
    </Main>
  )
}

export default EventPage

const Main = styled.main`
  background-color: #70731B;
  height: 100vh;
`