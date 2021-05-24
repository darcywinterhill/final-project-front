import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'

const CollagePage = ({ title }) => {
  return (
    <Main>
      <Header
      title='HANTVERK'
      />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  background-color: #E70410;
  height: 100vh;
`