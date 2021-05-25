import React from 'react'
import styled from 'styled-components'

const Section = ({ title, backgroundColor }) => {
  return (
    <SectionContainer
      backgroundColor={backgroundColor}>
    <SectionTitle>
      {title}
    </SectionTitle>
  </SectionContainer>
  )
}

export default Section

const SectionContainer = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17%;
  margin-bottom: 10px;
  background-color: ${props => props.backgroundColor};
  border-top: dashed 3px white;
  border-bottom: dashed 3px white;
`
const SectionTitle = styled.h2`
  color: #ffffff;
  margin: 0;
`

