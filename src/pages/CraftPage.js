import React from 'react'
import styled from 'styled-components/macro'

import BackButton from '../components/UI/BackButton'
import MiniDrawer from '../components/MiniDrawer'
import CraftsGallery from '../components/CraftsGallery'

const CraftPage = () => {

  return (
    <Main>
      <MiniDrawer>
        <Container>
          <CraftsGallery />
          <BackButton />
        </Container>
      </MiniDrawer>
    </Main>
  )
}

export default CraftPage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2522;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 20px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
    @media (min-width: 360px) {
      width: 70vw;
    }
    @media (min-width: 400px) {
      width: 75vw;
    }
    @media (min-width: 768px) {
      width: 80vw;
    }
    @media (min-width: 1025px) {
      width: 90vw;
    }
`