import React from 'react'
import styled from 'styled-components/macro'

const Title = ({ icon, title }) => {
  return (
    <TitleContainer>
      {icon}
      <TitleText>
        {title}
      </TitleText>
    </TitleContainer>
  )
}

export default Title

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: auto;
    @media (min-width: 1025px) {
      width: 60vw;
    }
`
const TitleText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  color: #ffffff;
  width: 100%;
  margin-bottom: 15px;
  border-bottom: dashed #ffffff 2px;
    @media (min-width: 1025px) {
      font-size: 45px;
      margin-bottom: 30px;
    }
`