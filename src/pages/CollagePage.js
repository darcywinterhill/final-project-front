import React from 'react'
import styled from 'styled-components/macro'

import Title from '../components/Title'
import GalleryCarousel from '../components/GalleryCarousel'
import MiniDrawer from '../components/MiniDrawer'

const CollagePage = () => {
  return (
    <Main>
      <MiniDrawer>
        <Title
          title='HANTVERK'
        />
        {/* <Container> */}
        <GalleryCarousel />
        {/* </Container> */}
      </MiniDrawer>
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`
/* const Container = styled.div`
  width: 100%;
` */