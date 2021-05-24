import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const AboutPage = ({ title }) => {
  return (
    <Main>
      <Header
      title='OM'
      />
    </Main>
  )
}

export default AboutPage

const Main = styled.main`
  background-color: #BC0A1E;
  height: 100vh;
`