import React from 'react'
import styled from 'styled-components/macro'

const Section = ({ title, containerWidth, backgroundColor }) => {
  return (
    <SectionContainer
      containerWidth={containerWidth}
      >
      <SectionPatch
        backgroundColor={backgroundColor}>
        <SectionTitle>
          {title}
        </SectionTitle>
    </SectionPatch>
  </SectionContainer>
  )
}

export default Section

const SectionContainer = styled.div.attrs(props => ({
  width: props.containerWidth
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 17%;
  background-color: #2A2522;
  width: ${props => props.containerWidth};
  height: 100%;
`
const SectionPatch = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor
}))`
  padding: 5px;
  background-color: ${props => props.backgroundColor};
`
const SectionTitle = styled.h2`
  color: #ffffff;
  font-size: 18px;
  margin: 0;
  padding: 5px 10px;
  text-decoration: none;
  border: dashed black 1px;
`

