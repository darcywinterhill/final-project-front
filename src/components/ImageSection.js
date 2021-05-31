import React from 'react'
import styled from 'styled-components/macro'

/* import img from '../assets/headerimg.jpg' */

const ImageSection = ({ backgroundColor, backgroundImage, text }) => {
  return (
    <SectionContainer
    backgroundColor={backgroundColor}>
        <ImageContainer
        backgroundImage={backgroundImage}>
          <QuoteContainer>
            <Quote>
              {text}
            </Quote>
          </QuoteContainer>
        </ImageContainer>
  </SectionContainer>
  )
}

export default ImageSection

const SectionContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  width: 100%;
  padding: 2.5%;
`
const ImageContainer = styled.div`
background-image: url(${props => props.backgroundImage});
background-color: rgba(0,0,0, 0.5);
background-size: cover;
overflow: hidden;
height: 150px;
width: 100%;
`
const QuoteContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0, 0.5);
width: 100%;
height: 100%;

`
const Quote = styled.h2`
color: white;
z-index: 2;
`