import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import img1 from '../assets/gallery/grannlåtsbroderi.jpg'
import img6 from '../assets/gallery/tenntrådsslöjd.jpg'
import img8 from '../assets/gallery/bildvävning.jpg'
import img9 from '../assets/gallery/ullprojekt.jpg'

const GalleryCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2999, min: 1025 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Main>
      <Carousel responsive={responsive}>

        <GalleryLink to='/collage/grannlåtsbroderi'>
        <ImageContainer style={{ backgroundImage: `url(${img1})` }}>
          <BlurContainer>
              grannlåtsbroderi
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
              trådslöjd
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
              cementgjutning
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
              fritt broderi
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
              skinn/läder
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img6})` }}>
          <BlurContainer>
              tenntrådsbroderi
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
              hälsomålning
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img8})` }}>
          <BlurContainer>
              bildvävning
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img9})` }}>
          <BlurContainer>
              ullprojekt
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

      </Carousel>
    </Main>
  )
}


export default GalleryCarousel

const Main = styled.div`
  width: 100vw;
    @media (min-width: 1025px) {
      width: 80vw;
    }
`
const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 60px;
  background-size: cover;
  overflow: hidden;
  border: dashed 2px #ffffff;
  border-radius: 12px;
    @media (min-width: 768px) {
      width: 350px;
      height: 350px;
      margin-top: 100px;
    }
`
const BlurContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`
const GalleryLink = styled(Link)`
  font-family: Lato, sans-serif;
  font-size: 22px;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
    @media (min-width: 768px) {
      font-size: 30px;
    }
`