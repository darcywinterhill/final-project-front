import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import img1 from '../assets/mamma.jpg'


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
        <ImageContainer style={{backgroundImage: `url(${img1})`}}>
          <BlurContainer>
            <CollageTitle>
              GRANNLÅTSBRODERI
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              TRÅDSLÖJD
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              CEMENTGJUTNING
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              FRITT BRODERI
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              SKINN/LÄDER
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              TENNTRÅDSSLÖJD
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              HÄLSOMÅLNING
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              BILDVÄVNING
            </CollageTitle>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/'>
        <ImageContainer>
          <BlurContainer>
            <CollageTitle>
              ULLPROJEKT
            </CollageTitle>
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
height: 55vh;
background-size: cover;
overflow: hidden;
`
const BlurContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.24);
width: 100%;
height: 100%;
`
const CollageTitle = styled.h2`
color: #ffffff;
`
const GalleryLink = styled(Link)`
text-decoration: none;
width: 100%;
`