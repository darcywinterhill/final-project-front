import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

/* import HeaderLinks from '../UI/HeaderLinks' */

import headerimg from '../assets/fabric-mobile.jpg'

const Header = ({
  title,
  children
}) => {

  return (
    <HeaderContainer>
      <HeaderTitle>
        {children}
        {title}
      </HeaderTitle>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: start;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
  height: 40%;
    @media (min-width: 1025px) {
      height: 100vh;
    }
`
/* const NavLink = styled(Link)`
  text-decoration: none;
` */
const HeaderTitle = styled.h1`
font-family: 'Noto Serif SC', serif;
  font-size: 35px;
  color: #ffffff;
  margin: 0;
    @media (min-width: 768px) {
      font-size: 42px;
    }
    @media (min-width: 1025px) {
      font-size: 62px;
    }
`
