import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

/* import HeaderLinks from '../UI/HeaderLinks' */
import BackButton from '../UI/BackButton'

const Header = ({
  title,
  height
}) => {

  return (
    <HeaderContainer
    height={height}>
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
  height: props.height
}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: start;
  background-color: #BC0A1E;
  height: ${props => props.height};
`
const NavLink = styled(Link)`
  text-decoration: none;
`
const HeaderTitle = styled.h1`
  font-family: 'Oranienbaum', serif;
  font-size: 45px;
  color: #ffffff;
  margin: 0;
`
