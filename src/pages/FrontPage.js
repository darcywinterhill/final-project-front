import React/* , { useState } */ from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import Section from '../components/Section'

const FrontPage = () => {
  return (
    <Main>
      <Header
        title='TANTVERK'
        height='40%'
      />
      <SectionWrapper>
        <SectionLink to='/collage'>
        <Section
          title='HANTVERK'
          containerWidth='180px'
          backgroundColor='#E70410'
        />
        </SectionLink>
        <SectionLink to='/events'>
        <Section
          title='EVENTS'
          containerWidth='130px'
          backgroundColor='#70731B'
        />
        </SectionLink>


        <SectionLink to='/about'>
        <Section
          title='OM'
          containerWidth='110px'
          backgroundColor='#BC0A1E'
        />
        </SectionLink>
        <SectionLink to='/bulletin'>
        <Section
          title='ANSLAGSTAVLA'
          containerWidth='200px'
          backgroundColor='#D6C667'
        />
        </SectionLink>
      </SectionWrapper>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 50%;
  margin-bottom: 10%;
`
const SectionLink = styled(Link)`
text-decoration: none;
height: 50%;
`