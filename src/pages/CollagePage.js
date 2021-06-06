import React from 'react'
import styled from 'styled-components/macro'

/* import NavBar from '../components/NavBar'
import Title from '../components/Title' */
import GalleryCarousel from '../components/GalleryCarousel'
import MiniDrawer from '../components/MiniDrawer'

const CollagePage = () => {
  return (

    <Main>
    <MiniDrawer header='HANTVERK'>
      
      <GalleryCarousel />
      
      </MiniDrawer>
</Main>
      /* <Main> */
        
      /* </Main> */
    /* </MiniDrawer> */
/*       <NavContainer>
      <NavBar />
      </NavContainer>
      <Title
        title='HANTVERK'
      /> */
       /*  <GalleryCarousel /> */
    
  )
}

export default CollagePage

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

/* const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 80px 0 0 0;
    @media (min-width: 768px) {
      padding: 120px 0 0 0;
    }
` */
/* const NavContainer = styled.div`
width: 85vw;
@media (min-width: 1025px) {
  width: 60vw;
}
` */