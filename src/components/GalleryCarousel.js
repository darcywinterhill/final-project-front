import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import img1 from '../assets/gallery/grannlåtsbroderi.jpg'
import img2 from '../assets/gallery/trådslöjd.jpg'
import img4 from '../assets/gallery/broderi.jpg'
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
            <Category>
              grannlåtsbroderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img2})` }}>
          <BlurContainer>
            <Category>
              trådslöjd
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <Category>
              cementgjutning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img4})` }}>
          <BlurContainer>
            <Category>
              fritt broderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <Category>
              skinn/läder
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img6})` }}>
          <BlurContainer>
            <Category>
              tenntrådsbroderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <Category>
              hälsomålning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img8})` }}>
          <BlurContainer>
            <Category>
              bildvävning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer style={{ backgroundImage: `url(${img9})` }}>
          <BlurContainer>
            <Category>
              ullprojekt
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

      </Carousel>
    </Main>
  )
}

export default GalleryCarousel
const Main = styled.div`
  padding-top: 80px;
  width: 72vw;
  height: 60vh;
    @media (min-width: 768px) {
      width: 84vw;
    }
    @media (min-width: 1025px) {
      width: 90vw;
    }
`
const ImageContainer = styled.div`
  width: 220px;
  height: 220px;
  margin: auto;
  background-size: cover;
  overflow: hidden;
  border-radius: 12px;
    @media (min-width: 768px) {
      width: 280px;
      height: 280px;
    }
    @media (min-width: 1025px) {
      width: 350px;
      height: 350px;
    }
`
const Category = styled.h3`
font-family: Lato, sans-serif;
font-size: 20px;
color: #ffffff;
text-decoration: none;
text-transform: uppercase;
padding-bottom: 10px;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`
const BlurContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: solid #ffffff 2px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: rgba(0, 0, 0, 0.0);
    }
    &:hover ${Category} {
      color: rgba(0, 0, 0, 0.0);
    }
`
const GalleryLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`