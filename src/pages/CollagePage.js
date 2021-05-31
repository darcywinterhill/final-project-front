import React from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components/macro'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import GalleryCarousel from '../components/GalleryCarousel'

const CollagePage = () => {
  return (
    <Main>
      <Header
        title='HANTVERK'
      />
      <NavBar
        collage='HANTVERK'
        about='OM'
        events='EVENTS'
        bulletin='ANSLAGSTAVLA'
      />
      <GalleryCarousel />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
  background-color: #ebe2ab;
  height: 100vh;
  width: 100vw;
`