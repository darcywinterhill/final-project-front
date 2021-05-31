import React from 'react'
import styled from 'styled-components/macro'

const SectionTemplate = ({
  backgroundColor,
  flex
}) => {
  return (
    <SectionContainer
    backgroundColor={backgroundColor}
    flex={flex}>
      </SectionContainer>
  )
}

export default SectionTemplate

const SectionContainer = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor,
  flex: props.flex
}))`
  display: flex;
  flex-direction: ${props => props.flex};
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  padding: 2.5%;
`