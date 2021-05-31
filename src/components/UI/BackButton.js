import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const BackButton = () => {
  return (
    <NavLink to='/'>
    <BackLink
      className="fas fa-arrow-alt-circle-left">
    </BackLink>
    </NavLink>
  )
}

export default BackButton

const BackLink = styled.i`
  position: absolute;
  top: 15px;
  left: 10px;
  z-index: 0;
  font-size: 28px;
  color: white;
`
const NavLink = styled(Link)`
  text-decoration: none;
`