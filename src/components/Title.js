import React from 'react'
import styled from 'styled-components/macro'

const Title = ({ title }) => {
  return (
    <TitleContainer>
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div`
  width: 85vw;
  margin-bottom: 15px;
    @media (min-width: 1025px) {
      width: 60vw;
    }
`
const TitleText = styled.h1`
font-family: 'Lato', sans-serif;
  font-size: 34px;
  color: #ffffff;
  margin: 0;
  border-bottom: dashed #ffffff 2px;
    @media (min-width: 1025px) {
      font-size: 45px;
    }
`