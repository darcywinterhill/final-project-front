import React from 'react'
import styled from 'styled-components/macro'

const Section = ({
  title,
  number,
  text,
  flex,
  color,
  img,
  alt,
  height,
  width,
  backgroundColor,
  margin
}) => {

  return (
    <SectionContainer
      backgroundColor={backgroundColor}
      flex={flex}>
      <SectionText>
        {number}
      </SectionText>
      <SectionTitle
        color={color}
        margin={margin}>
          {title}
      </SectionTitle>
      <SectionText>
        {text}
      </SectionText>
      <img
        src={img}
        alt={alt}
        height={height}
        width={width}
      />
    </SectionContainer>
  )
}

export default Section

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
const SectionTitle = styled.h2.attrs(props => ({
  color: props.color,
  margin: props.margin
}))`
  font-family: 'Noto Serif SC', serif;
  color: ${props => props.color};
  font-size: 28px;
  margin: ${props => props.margin};
  text-decoration: none;
`
const SectionText = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
  padding
`