import React from 'react'
import styled from 'styled-components/macro'

const Footer = ({ children }) => {
  return (
    <FooterContainer>
      {children}
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
    @media (min-width: 768px) {
      width: 95%;
    }
    @media (min-width: 1025px) {
      width: 98%;
    }
`