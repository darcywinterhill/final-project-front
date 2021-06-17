import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import img1 from '../assets/gallery/grannlåtsbroderi.jpg'
import img2 from '../assets/gallery/trådslöjd.jpg'
import img3 from '../assets/gallery/cement.jpeg'
import img4 from '../assets/gallery/broderi.jpg'
import img5 from '../assets/gallery/skinnläder.jpeg'
import img6 from '../assets/gallery/tenntrådsslöjd.jpg'
import img7 from '../assets/gallery/hälsomålning.jpg'
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

        <GalleryLink to='/category/f7729ff6-0926-4cf8-8109-5edec479bbf6'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img1})`
          }}
        >
          <BlurContainer>
            <Category>
              grannlåtsbroderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/99f6299b-d73d-46e6-a3b4-5566b9c607c6'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img2})`
          }}
        >
          <BlurContainer>
            <Category>
              trådslöjd
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/55879e1b-2df3-4ec0-ba59-41fda5d3e621'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img3})`
          }}
        >
          <BlurContainer>
            <Category>
              cementgjutning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/9640773c-73c6-47dd-b9d9-b8b63a93e2d1'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img4})`
          }}
        >
          <BlurContainer>
            <Category>
              fritt broderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/46de1a3e-b774-4de0-9a07-0110ef0fdc36'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img5})`
          }}>
          <BlurContainer>
            <Category>
              skinn/läder
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/bfba4621-5177-49b9-af53-4483371f12d9'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img6})`
          }}
        >
          <BlurContainer>
            <Category>
              tenntrådsbroderi
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/9957652e-b9f6-4c48-89e3-5e70362499cb'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img7})`
          }}>
          <BlurContainer>
            <Category>
              hälsomålning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/45141845-0597-4154-8428-af9431bb86cd'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img8})`
          }}
        >
          <BlurContainer>
            <Category>
              vävning
            </Category>
          </BlurContainer>
        </ImageContainer>
        </GalleryLink>

        <GalleryLink to='/category/e232887b-8932-464a-b705-ff43bf7051dc'>
        <ImageContainer
          style={{
            backgroundImage: `url(${img9})`
          }}
        >
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
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 220px;
  margin: auto;
  background-size: cover;
  overflow: hidden;
  border-radius: 12px;
    @media (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
    @media (min-width: 1600px) {
      width: 350px;
      height: 350px;
    }
`
const Category = styled.h3`
  font-family: Lato, sans-serif;
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 2px;
  background-color: rgb(42, 37, 34, 0.5);
  border-radius: 5px;
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
  border: solid #fff 2px;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: rgba(0, 0, 0, 0.0);
    }
    &:hover ${Category} {
      color: rgba(0, 0, 0, 0.0);
      background-color: rgba(0, 0, 0, 0.0);
    }
`
const GalleryLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
`