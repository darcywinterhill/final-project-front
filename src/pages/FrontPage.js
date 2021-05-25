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
      <SectionLink to='/collage'>
      <Section
        title='HANTVERK'
        backgroundColor='#E70410'
      />
      </SectionLink>
      <SectionLink to='/about'>
      <Section
        title='OM'
        backgroundColor='#BC0A1E'
      />
      </SectionLink>
      <SectionLink to='/events'>
      <Section
        title='UTSTÄLLNINGAR'
        backgroundColor='#70731B'
      />
      </SectionLink>
      <SectionLink to='/bulletin'>
      <Section
        title='ANSLAGSTAVLA'
        backgroundColor='#D6C667'
      />
      </SectionLink>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  background-color: #2A2522;
  height: 100vh;
`
const SectionLink = styled(Link)`
text-decoration: none;
`