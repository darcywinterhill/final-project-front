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
  width: 85vw;
  min-height: 45vh;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 12px;
    @media (min-width: 768px) {
      min-height: 50vh;
    }
    @media (min-width: 1025px) {
      width: ${props => props.width};
      min-height: 50vh;
    }
`