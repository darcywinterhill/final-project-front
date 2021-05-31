import React from 'react'
/* import { Link } from 'react-router-dom' */
import styled from 'styled-components/macro'

import Header from '../components/Header'
import NavBar from '../components/NavBar'
import BackButton from '../components/UI/BackButton'
import GalleryCarousel from '../components/GalleryCarousel'

import headerimg from '../assets/fabric-mobile.jpg'

const CollagePage = () => {
  return (
    <Main>
      <NavBar/>
      <GalleryCarousel />
    </Main>
  )
}

export default CollagePage

const Main = styled.main`
position: relative;
  height: 100vh;
  width: 100vw;
  background-image: url(${headerimg});
  background-size: cover;
overflow: hidden;
  display: flex;
flex-direction: column;
justify-content: center;
`