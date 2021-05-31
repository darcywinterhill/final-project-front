import React from 'react'
import styled from 'styled-components/macro'

const SectionText = ({ text }) => {

  return (
    <Container>
    <SectionContainer>
      {text}
    </SectionContainer>
    </Container>
  )
}

export default SectionText

const SectionContainer = styled.p`
  color: white;
  font-size: 18px;
  text-align: center;
`
const Container = styled.div``