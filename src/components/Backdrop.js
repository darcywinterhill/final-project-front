import React from 'react'
import styled from 'styled-components/macro'

const Backdrop = ({ children, flex, justify, align, width }) => {
  return (
    <Container
      flex={flex}
      justify={justify}
      align={align}
      width={width}>
      {children}
    </Container>
  )
}

export default Backdrop

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flex};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: wrap;
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 12px;
    @media (min-width: 1025px) {
      width: ${props => props.width};
    }
`