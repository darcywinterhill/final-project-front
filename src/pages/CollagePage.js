import React from 'react'
import styled from 'styled-components/macro'

import NavBar from '../components/NavBar'
import Title from '../components/Title'
import GalleryCarousel from '../components/GalleryCarousel'

const CollagePage = () => {
  return (
    <Main>
      <NavContainer>
      <NavBar />
      </NavContainer>
      <Title
        title='HANTVERK'
      />
        <GalleryCarousel />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  padding: 80px 0 0 0;
    @media (min-width: 768px) {
      padding: 120px 0 0 0;
    }
`
const NavContainer = styled.div`
width: 85vw;
@media (min-width: 1025px) {
  width: 60vw;
}
`