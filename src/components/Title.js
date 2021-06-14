import React from 'react'
import styled from 'styled-components/macro'

const Title = ({ title }) => {
  return (
      <TitleText>
        {title}
      </TitleText>
  )
}

export default Title

const TitleText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-weight: 100;
  color: #fff;
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