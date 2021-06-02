import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import Backdrop from '../components/Backdrop'

import headerimg from '../assets/fabric-mobile.jpg'
import bgimg from '../assets/profilebg.jpg'
import profileimg from '../assets/lotta.jpg'

const AboutPage = () => {

  return (
    <Main>
      <NavBar />
      <Title
        title='OM'
      />
      <ProfileContainer>
      <ProfileImg />
        <HeaderTitle>
          Lotta Winkler
        </HeaderTitle>
      </ProfileContainer>
      <Backdrop
        flex='column'
        width='60vw'>
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
  align-items: center;
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  background-image: url(${headerimg});
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  padding: 80px 0 30px 0;
    @media (min-width: 768px) {
      padding: 120px 0 30px 0;
    }
`
const ProfileContainer = styled.div`
  display: flex;
  width: 85vw;
  background-image: url(${bgimg});
  background-size: cover;
  border: dashed 2px #ffffff;
  border-radius: 12px;
  margin-bottom: 15px;
  padding: 10px;
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
  color: #ffffff;
  display: flex;
  align-items: flex-end;
  width: 50%;
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
  background-image: url(${profileimg});
  background-size: cover;
  overflow: hidden;
  border: solid #70731b 2px;
  border-radius: 50%;
  margin-right: 15px;
   @media (min-width: 768px) {
    width: 180px;
    height: 180px;
    margin-right: 25px;
   }
`
const AboutText = styled.p`
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #ffffff;
  padding-top: 15px;
   @media (min-width: 768px) {
     font-size: 16px;
   }

`