import React/* , { useState } */ from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Header from '../components/Header'
import Section from '../components/Section'

const FrontPage = () => {
  return (
    <Main>
      <Header
        title='TANTVERK'
      />
      <Link to='/collage'>
      <Section
        title='HANTVERK'
        backgroundColor='#E70410'
      />
      </Link>
      <Link to='/about'>
      <Section
        title='OM'
        backgroundColor='#BC0A1E'
      />
      </Link>
      <Link to='/events'>
      <Section
        title='UTSTÄLLNINGAR'
        backgroundColor='#70731B'
      />
      </Link>
      <Link to='/bulletin'>
      <Section
        title='ANSLAGSTAVLA'
        backgroundColor='#D6C667'
      />
      </Link>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  background-color: #000000;
  height: 100vh;
`