import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import GalleryCarousel from '../components/GalleryCarousel'

import headerimg from '../assets/fabric-mobile.jpg'

const CollagePage = () => {
  return (
    <Main>
      <NavBar />
      <Title
        title='HANTVERK'
      />
      <GalleryContainer>
        <GalleryCarousel />
      </GalleryContainer>
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-image: url(${headerimg});
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  padding: 80px 0 0 0;
    @media (min-width: 768px) {
      padding: 120px 0 0 0;
    }
`
const GalleryContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
`