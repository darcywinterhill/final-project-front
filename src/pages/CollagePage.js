import React from 'react'
import styled from 'styled-components/macro'
import PaletteIcon from '@material-ui/icons/Palette';

import Title from '../components/Title'
import GalleryCarousel from '../components/GalleryCarousel'
import MiniDrawer from '../components/MiniDrawer'

const CollagePage = () => {
  return (
    <Main>
      <MiniDrawer>
        <Title
          icon={<PaletteIcon
            style={{
              fontSize: '50px',
              color: '#ffffff',
              marginRight: '10px'
            }}
          />}
          title='HANTVERK'
        />
        <Container>
        <GalleryCarousel />
        </Container>
      </MiniDrawer>
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`
const Container = styled.div`
  width: 100%;
`