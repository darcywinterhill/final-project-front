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
  background-color: #2a2522;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
width: 60vw;
display: flex;
flex-direction: column;
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