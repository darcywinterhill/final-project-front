import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Backdrop from '../components/Backdrop'

import headerimg from '../assets/fabric-mobile.jpg'
import bgimg from '../assets/profilebg.jpg'
import profileimg from '../assets/mamma.jpg'

const AboutPage = () => {

  return (
    <Main>
      <NavBar />
      <ProfileContainer>
      <ProfileImg />
        <HeaderTitle>
          Lotta Winkler
        </HeaderTitle>
      </ProfileContainer>
      <Backdrop
        flex='column'>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tellus risus, ornare eu mi in, malesuada venenatis dui. Duis scelerisque augue et tristique cursus. Vivamus consectetur mauris velit, fringilla rutrum ipsum suscipit quis. Vivamus eu nisi tempor, semper ex venenatis, hendrerit eros. Maecenas diam est, lobortis vitae odio quis, malesuada viverra neque. Maecenas in semper odio, et varius tortor. Nunc suscipit scelerisque lectus eget dignissim. Curabitur a convallis metus, eget pellentesque arcu. Donec sollicitudin mauris magna.
        </AboutText>
        <AboutText>
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vel urna aliquet, ultrices eros et, dignissim ligula. In placerat, augue ultrices iaculis tristique, tellus justo interdum nibh, eget ultricies diam odio et velit. Duis facilisis nunc euismod nulla viverra mattis. Suspendisse potenti. Praesent at nulla lectus. Etiam congue metus purus, in hendrerit nisi interdum pellentesque. Duis dictum felis ex, sit amet aliquet lorem scelerisque vitae. Suspendisse dignissim porta nibh, quis ornare ligula malesuada sed. Ut vehicula mi eros. Mauris maximus est a velit semper rutrum.
        </AboutText>
      </Backdrop>
    </Main>
  )
}

export default AboutPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 15vh 0 5vh 0;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
`
const ProfileContainer = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  background-image: url(${bgimg});
  background-size: cover;
  border: dashed 2px #ffffff;
  border-radius: 12px;
  width: 85vw;
    @media (min-width: 768px) {
      padding: 15px;
    }
    @media (min-width: 1025px) {
      width: 60vw;
    }
`

const HeaderTitle = styled.h1`
  font-family: 'Noto Serif SC', serif;
  font-size: 32px;
  width: 50%;
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  border-bottom: dashed 2px #e70410;
    @media (min-width: 768px) {
      font-size: 50px;
      width: 60%
      border-bottom: dashed 3px #e70410;
    }
    @media (min-width: 1025px) {
      font-size: 48px;
    }
`
const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  margin-right: 15px;
  border-radius: 50%;
  background-image: url(${profileimg});
  background-size: cover;
  overflow: hidden;
  border: solid black 1px;
   @media (min-width: 768px) {
    width: 180px;
    height: 180px;
    margin-right: 25px;
   }
`
const AboutText = styled.p`
  font-family: Lato, sans-serif;
  color: #ffffff;
  font-size: 14px;
  padding-top: 15px;
   @media (min-width: 768px) {
     font-size: 16px;
   }

`