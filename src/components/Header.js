import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

/* import HeaderLinks from '../UI/HeaderLinks' */
import BackButton from '../components/UI/BackButton'

import headerimg from '../assets/fabric-mobile.jpg'

const Header = ({
  title
}) => {

  return (
    <HeaderContainer>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <NavLink to='/'>
        <BackButton />
      </NavLink>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.header.attrs(props => ({
  height: props.height,
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: start;
  background-image: url(${headerimg});
  background-size: cover;
  overflow: hidden;
  height: 40%;
`
const NavLink = styled(Link)`
  text-decoration: none;
`
const HeaderTitle = styled.h1`
font-family: 'Noto Serif SC', serif;
  font-size: 35px;
  color: #ffffff;
  margin: 0;
`
