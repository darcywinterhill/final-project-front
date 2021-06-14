import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const BackButton = () => {
  return (
    <NavLink to='/collage'>
    <BackLink className='fas fa-arrow-alt-circle-left'>
    </BackLink>
    </NavLink>
  )
}

export default BackButton

const BackLink = styled.i`
  font-size: 30px;
  color: #fff;
    @media (min-width: 768px) {
      font-size: 50px;
    }
`
const NavLink = styled(Link)`
  text-decoration: none;
`