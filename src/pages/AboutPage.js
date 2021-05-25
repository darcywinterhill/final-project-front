import React/* , { useState } */ from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components'

import Header from '../components/Header'
import NavBar from '../components/NavBar'

import profileImg from '../assets/mamma.jpg'

const AboutPage = () => {
  return (
    <Main>
      <Header
        title='OM'
      />
      <NavBar
        collage='HANTVERK'
        about='OM'
        events='EVENTS'
        bulletin='ANSLAGSTAVLA'
      />
        <InfoContainer>
          <ProfileImageContainer/>
          <InfoTitle>
            Lotta Winkler
          </InfoTitle>
          <InfoText>
            Etiam sit amet sem sit amet purus commodo scelerisque vel at est. Donec venenatis ultricies est, vehicula lobortis tortor suscipit ac. Etiam efficitur sodales diam et cursus.

            Vivamus risus magna, mollis tempus ex quis, scelerisque cursus ligula.
          </InfoText>
          <InfoText>
            Etiam sit amet sem sit amet purus commodo scelerisque vel at est. Donec venenatis ultricies est, vehicula lobortis tortor suscipit ac. Etiam efficitur sodales diam et cursus.

          </InfoText>
          <InfoText>
            Etiam sit amet sem sit amet purus commodo scelerisque vel at est. Donec venenatis ultricies est, vehicula lobortis tortor suscipit ac. Etiam efficitur sodales diam et cursus.

          </InfoText>
        </InfoContainer>
    </Main>
  )
}

export default AboutPage

const Main = styled.main`
  background-color: #BC0A1E;
  height: auto;
  padding-bottom: 30px;
`

const InfoContainer = styled.div`
  position: relative;
  width: 78%;
  background-color: #D6C667;
  border-radius: 3%;
  padding: 15px 15px 25px 15px;
  border: dashed 2px #ffffff;
  margin: auto;
  margin-top: 50px;
`
const ProfileImageContainer = styled.div`
  position: absolute;
  top: -30px;
  right: -20px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: dashed 2px #E70410;
  background-image: url(${profileImg});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  
`
const InfoTitle = styled.h2`
  margin-top: 100px;
`
const InfoText = styled.p`
  margin-top: 10px;
  font-size: 14px;
`