import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* import HeaderLinks from '../UI/HeaderLinks' */
import img from '../assets/headerimg.jpg'
import BackButton from '../UI/BackButton'

const Header = ({
  title,
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

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 130px;
  margin-bottom: 5px;
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
