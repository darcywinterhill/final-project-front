import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import GalleryCarousel from '../components/GalleryCarousel'

import headerimg from '../assets/fabric-mobile.jpg'

const CollagePage = () => {
  return (
    <Main>
      <NavBar />
      <GalleryCarousel />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
`