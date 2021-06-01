import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const GalleryCarousel = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Main>
      <Carousel responsive={responsive}>

        <GalleryLink to='/collage/grannlåtsbroderi'>
        <ImageContainer /* style={{backgroundImage: `url(${img1})`}} */>
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
        <ImageContainer>
          <BlurContainer>
              tenntrådsslöjd
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
        <ImageContainer>
          <BlurContainer>
              bildvävning
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
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
`
const ImageContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-size: cover;
  overflow: hidden;
    @media (min-width: 768px) {
      height: 40vh;
    }
    @media (min-width: 1025px) {
      height: 55vh;
    }
`
const BlurContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.24);
`
const GalleryLink = styled(Link)`
  text-decoration: none;
  width: 100%;
  font-family: Lato, sans-serif;
  text-transform: uppercase;
  color: #ffffff;
  font-size: 22px;
    @media (min-width: 768px) {
      font-size: 30px;
    }
`