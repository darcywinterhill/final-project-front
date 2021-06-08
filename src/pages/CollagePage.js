import React from 'react'
import styled from 'styled-components/macro'

import GalleryCarousel from '../components/GalleryCarousel'
import MiniDrawer from '../components/MiniDrawer'

const CollagePage = () => {
  return (
    <Main>
      <MiniDrawer>
        <GalleryCarousel />
      </MiniDrawer>
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  background-color: #2a2522;
  padding-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`