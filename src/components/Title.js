import React from 'react'
import styled from 'styled-components/macro'

const Title = ({ title }) => {
  return (
  /*   <TitleContainer> */
      <TitleText>
        {title}
      </TitleText>
    /* </TitleContainer> */
  )
}

export default Title

/* const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
    @media (min-width: 1025px) {
      width: 60vw;
    }
` */
const TitleText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 100;
  color: #ffffff;
  width: contain;
  margin-bottom: 15px;
    @media (min-width: 768px) {
      font-size: 30px;
    } 
    @media (min-width: 1025px) {
      font-size: 35px;
      margin-bottom: 20px;
      width: 60vw;
    }
`