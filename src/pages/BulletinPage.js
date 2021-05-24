import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom'*/
import styled from 'styled-components'

import Header from '../components/Header'

const BulletinPage = ({ title }) => {
  return (
    <Main>
      <Header
      title='ANSLAGSTAVLA'
      />
    </Main>
  )
}

export default BulletinPage

const Main = styled.main`
  background-color: #D6C667;
  height: 100vh;
`