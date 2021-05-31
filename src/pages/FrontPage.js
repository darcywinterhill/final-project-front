import React/* , { useState } */ from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Header from '../components/Header'
import Section from '../components/Section'
import ImageSection from '../components/ImageSection'
import AboutSection from '../components/AboutSection'

import img from '../assets/mamma.jpg'


const FrontPage = () => {
  return (
    <Main>
      <Header
        title='TANTVERK'
      />
      <SectionWrapper>
        <AboutSection />

        <SectionLink to='/collage'>
        <Section
          title='Hantverk'
          number='1.'
          flex='column'
          backgroundColor='#ebe2ab'
          color='#330202'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        />
        </SectionLink>

        <ImageSection
          backgroundColor='#D6C667'
          text='Some quote goes here'
        />

        <SectionLink to='/events'>
        <Section
          title='Events'
          number='2.'
          backgroundColor='#ebe2ab'
          color='#330202'
          margin='auto'
        />
        </SectionLink>

        <SectionLink to='/about'>
        <Section
          title='Om'
          number='3.'
          img={img}
          height='100px'
          width='auto'
          alt='Image of Lotta'
          backgroundColor='#D6C667'
          color='white'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        />
        </SectionLink>

        <SectionLink to='/bulletin'>
        <Section
          title='Anslagstavla'
          number='4.'
          backgroundColor='#ebe2ab'
          color='#330202'
          margin='auto'
        />
        </SectionLink>

      </SectionWrapper>
    </Main>
  )
}

export default FrontPage

const Main = styled.main`
height: 100vh;
`
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const SectionLink = styled(Link)`
text-decoration: none;
width: 100%;
`