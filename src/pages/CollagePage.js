import React from 'react'
import styled from 'styled-components/macro'

import NavLinks from '../components/UI/NavLinks'
import GalleryCarousel from '../components/GalleryCarousel'
import MiniDrawer from '../components/MiniDrawer'
import Footer from '../components/Footer'

const CollagePage = () => {
  return (
    <Main>
      <MiniDrawer>
        <GalleryCarousel />
      </MiniDrawer>
      <Footer>
        <NavLinks />
      </Footer>
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  background-color: #2a2522;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 50px 0 370px 0;
    @media (min-width: 768px) {
      padding-top: 100px;
    }
    @media (min-width: 1025px) {
      padding-bottom: 100px;
    }
`