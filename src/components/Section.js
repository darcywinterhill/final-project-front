import React from 'react'
import styled from 'styled-components/macro'


const Section = ({
  title,
  number,
  text,
  color,
  backgroundColor
}) => {

  return (
    <SectionContainer
      backgroundColor={backgroundColor}
    >

      <SectionTitle
        color={color}
      >
        {title}
      </SectionTitle>

    </SectionContainer>
  )
}

export default Section

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  background-color: ${props => props.backgroundColor};
  padding: 2.5%;
`
const SectionTitle = styled.h2`
  font-family: 'Noto Serif SC', serif;
  color: ${props => props.color};
  font-size: 28px;
  text-decoration: none;
  -webkit-transition: font-size .5s ease;
  -moz-transition: font-size .5s ease;
  -o-transition: font-size .5s ease;
  transition: font-size .5s ease;
    :hover {
    font-size: 2.5em;
    }
      @media (min-width: 768px) {
        font-size: 38px;
        :hover {
          font-size: 3em;      
        }
      }
      @media (min-width: 1025px) {
        font-size: 44px;
        :hover {
          font-size: 3em;
        }   
      }
`